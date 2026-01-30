# from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.utils.timezone import now
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response

from visitors.models import Visitor
from .models import Visit
from .serializers import VisitSerializer
from accounts.models import User
from visits.utils import generate_visit_qr
import uuid

@api_view(['GET'])
def verify_qr(request):
    token = request.GET.get('token')

    if not token:
        return Response(
            {"error": "Token missing"},
            status=status.HTTP_400_BAD_REQUEST
        )
    try:
        visit = Visit.objects.get(qr_code=token)
    except Visit.DoesNotExist:
        return Response(
            {"error":"Invalid QR code"},
            status=status.HTTP_404_NOT_FOUND
        )

def list_visits(request):
    visits = Visit.objects.all().order_by('-check_in_time')
    serializer = VisitSerializer(visits, many=True)
    return Response(serializer.data)

class VisitorCheckinAPIView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        visitor_id = request.data.get('visitor')
        host_id = request.data.get('host')
        purpose = request.data.get('purpose')

        
        try:
            visitor = Visitor.objects.get(id=visitor_id)
        except Visitor.DoesNotExist:
            return Response(
                {"error": "Visitor does now exists"},
                status= status.HTTP_400_BAD_REQUEST
            )
        
        
        try:
            host = User.objects.get(id=host_id)
        except User.DoesNotExist:
            return Response(
                {"error": "Host does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
       
        visit = Visit.objects.create(
            visitor=visitor,
            host=host,
            purpose=purpose,
            status='PENDING'
        )

        return Response(
    {
        "message": "Visitor check-in successful",
        "visit_id": visit.id,
        "status": visit.status
    },
    status=status.HTTP_201_CREATED
)

    
class HostPendingVisits(ListAPIView):
    serializer_class = VisitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Visit.objects.filter(
            host=self.request.user,
            status='PENDING'
        ).order_by('-check_in_time')

class ApproveVisitAPIView(APIView):
    queryset =Visit.objects.all()
    serializer_class = VisitSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, visit_id):
        visit = get_object_or_404(
            Visit,
            id=visit_id,
            host=request.user,
            status='PENDING'
        )

        visit.status = 'APPROVED'
        generate_visit_qr(visit)
        visit.save()

        return Response(
            {"message": "Visit approved",
             "qr_code_url": visit.qr_code.url
             },
            status=status.HTTP_200_OK
        )
    
    def perform_update(self, serializer):
        serializer.save(
            status='APPROVED',
            qr_code=str(uuid.uuid4())
        )
    
class RejectVisitAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, visit_id):
        visit = get_object_or_404(
            Visit,
            id=visit_id,
            host=request.user,
            status='PENDING'
        )

        visit.status = 'REJECTED'
        visit.save()

        return Response(
            {"message": "Visit rejected"},
            status=status.HTTP_200_OK
        )

class SecurityApprovedVisitsAPIView(ListAPIView):
    serializer_class = VisitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Visit.objects.filter(
            status='APPROVED'
        ).order_by('-check_in_time')

class SecurityCheckoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, visit_id):
        visit = get_object_or_404(
            Visit,
            id=visit_id,
            status='APPROVED'
        )

        visit.status = 'CHECKED_OUT'
        visit.check_out_time = now()
        visit.save()

        return Response(
            {
                "message": "Visitor checked out successfully",
                "visit_id": visit.id,
                "check_out_time": visit.check_out_time
            },
            status=status.HTTP_200_OK
        )

class CheckoutVisitAPIView(UpdateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(
            status="CHECKED_OUT",
            check_out_time=now()
        )

class QRCheckoutAPIView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        token = request.data.get("token")

        if not token:
            return Response(
                {"error": "QR token required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        visit = get_object_or_404(
            Visit,
            qr_token=token,
            status="APPROVED"
        )

        visit.status = "CHECKED_OUT"
        visit.check_out_time = now()
        visit.save()

        return Response(
            {
                "message": "Visitor checked out successfully",
                "visitor": visit.visitor.name,
                "checkout_time": visit.check_out_time
            },
            status=status.HTTP_200_OK
        )