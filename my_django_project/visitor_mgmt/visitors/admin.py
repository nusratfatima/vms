from django.contrib import admin
from .models import Visitor

@admin.register(Visitor)
class VisitorAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'company', 'created_at')
    search_fields = ('name', 'phone')
