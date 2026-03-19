from django.core.validators import validate_email


def save_contact_message(name, email, message):
    from services.models import ContactMessage

    try:
        validate_email(email)
    except Exception as e:
        raise ValueError("Invalid email address") from e
    

    contact_message = ContactMessage(name=name, email=email, message=message)
    contact_message.save()