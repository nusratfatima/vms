import qrcode
from django.core.files.base import ContentFile
from io import BytesIO

def generate_visit_qr(visit):
    qr_data = f"VISIT:{visit:id}"

    qr = qrcode.make(qr_data)
    buffer = BytesIO()
    qr.save(buffer, format="PNG")

    filename = f"visit_{visit.id}.png"
    visit.qr_code.save(
        filename,
        ContentFile(buffer.getvalue()),
        save=False
    )