from django.urls import path
from .views import list_visits 
from .views import verify_qr
from .views import (
    VisitorCheckinAPIView,
    HostPendingVisits,
    ApproveVisitAPIView,
    RejectVisitAPIView,
    SecurityApprovedVisitsAPIView,
    SecurityCheckoutAPIView,
    CheckoutVisitAPIView,
    QRCheckoutAPIView
)

urlpatterns = [
    path('', list_visits),

    path('checkin/', VisitorCheckinAPIView.as_view()),

    #Host
    path('host/pending/', HostPendingVisits.as_view()),
    path('host/approve/<int:visit_id>/', ApproveVisitAPIView.as_view()),
    path('host/reject/<int:visit_id>/', RejectVisitAPIView.as_view()),

    #Security
    path('checkout/<int:pk>/', CheckoutVisitAPIView.as_view()),
    path('security/approved/', SecurityApprovedVisitsAPIView.as_view()),
    path('security/checkout/<int:visit_id>/', SecurityCheckoutAPIView.as_view()),

    path('verify-qr/', verify_qr),
    path('checkout/', QRCheckoutAPIView.as_view()),
]