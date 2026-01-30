from django.db import models

class Visitor(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    company = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='visitors/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
