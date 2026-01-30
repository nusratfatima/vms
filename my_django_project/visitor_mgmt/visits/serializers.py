from rest_framework import serializers
from .models import Visit

class VisitSerializer(serializers.ModelSerializer):
    qr_code_url = serializers.SerializerMethodField()

    class Meta:
        model = Visit
        fields = "__all__"

    def get_qr_code_url(self, obj):
        if obj.qr_code:
            return obj.qr_code.url
        return None
