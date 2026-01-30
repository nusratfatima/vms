from django.contrib import admin
from .models import Visit

@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = (
        'visitor',
        'host',
        'purpose',
        'status',
        'check_in_time',
        'check_out_time'
    )
    list_filter = ('status',)