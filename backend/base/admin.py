from django.contrib import admin
from base import models


admin.site.register(models.contactMessage)

admin.site.register(models.gymServices)
admin.site.register(models.features)
admin.site.register(models.serviceFeature)

admin.site.register(models.Trainers)
admin.site.register(models.Specialties)
admin.site.register(models.TrainerSpecialty)

admin.site.register(models.MembershipPlans)
admin.site.register(models.MembershipPlanFeatures)