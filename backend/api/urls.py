from django.urls import path
from api import views

urlpatterns = [
    path('contact/',views.contact_message),
]