from django.urls import path
from api import views


urlpatterns = [
    path('contact/',views.contact),
    path('get-services/',views.get_services),
    path('get-trainers/',views.get_trainers),
    path('get-membership-plans/',views.get_membership_plans),
]
