from base import models
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.db import transaction

@transaction.atomic
def create_contact_message(name:str, email:str, message:str)->models.contactMessage:
    if len(message) > 500:
        raise ValidationError("Message cannot exceed 500 characters.")
    
    if len(message) <2:
        raise ValidationError("message must be at least 2 characters long.")
    
    if not name or len(name) < 2:
        raise ValidationError("Name must be at least 2 characters long.")
    
    try:
        validate_email(email)
    except ValidationError:
        raise ValidationError("Invalid email address.")

    contact_message = models.contactMessage(
        name=name,
        email=email,
        message=message
    )

    contact_message.save()

    return contact_message


def get_all_services()->list:
    services = []
    services_objs = models.gymServices.objects.all()

    for services_obj in services_objs:
        service = {
            'icon':services_obj.icon,
            'title':services_obj.title,
            'description':services_obj.description,
            'features':[]
        }
        features = models.serviceFeature.objects.filter(service=services_obj)
        for feature in features:
            service['features'].append(feature.feature.feature)
        
        services.append(service)
    
    return services



def get_all_trainers()->list:
    trainers=[]
    trainer_objs=models.Trainers.objects.all()
    for trainer_obj in trainer_objs:
        trainer ={
            'name':trainer_obj.name,
            'role':trainer_obj.role,
            'image':trainer_obj.img_url,
            'specialties':[],
        }
        trainer_specialties = models.TrainerSpecialty.objects.filter(trainer=trainer_obj)
        for trainer_specialty in trainer_specialties:
            trainer['specialties'].append(trainer_specialty.specialty.specialty)
        
        trainers.append(trainer)
    
    return trainers

def get_all_membership_plans()->list:
    plans = []
    membership_plan_objs = models.MembershipPlans.objects.all()
    for membership_plan_obj in membership_plan_objs:
        plan = {
            'name':membership_plan_obj.name,
            'price':membership_plan_obj.price,
            'period':membership_plan_obj.period,
            'description':membership_plan_obj.description,
            'popular':membership_plan_obj.popular,
            'features':[]
        }
        features = models.MembershipPlanFeatures.objects.filter(plan=membership_plan_obj)
        for plan_feature in features:
            plan['features'].append(plan_feature.feature)
        
        plans.append(plan)
        
    return plans
