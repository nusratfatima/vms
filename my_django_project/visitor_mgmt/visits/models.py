from django.db import models

class Visit(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
        ('CHECKED_OUT', 'Checked Out'),
    )

    qr_code = models.ImageField(
        upload_to='qr_codes/',
        blank=True,
        null=True
    )

    visitor = models.ForeignKey('visitors.Visitor', on_delete=models.CASCADE)
    host = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    purpose = models.CharField(max_length=200)
    check_in_time = models.DateTimeField(auto_now_add=True)
    check_out_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    qr_token = models.CharField(max_length=200, unique=True, null=True, blank=True)