from django.db import models

class contactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name



class gymServices(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    icon = models.CharField(max_length=30)

    def __str__(self):
        return self.title

class features(models.Model):
    feature = models.CharField(max_length=50)

    def __str__(self):
        return self.feature

class serviceFeature(models.Model):
    service = models.ForeignKey(gymServices,on_delete=models.CASCADE)
    feature = models.ForeignKey(features,on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['service', 'feature'],name='unique_service_feature'
            )
        ]

    def __str__(self):
        return f"{self.service.title}-{self.feature.feature}"
    
    

class Trainers(models.Model):
    name = models.CharField(max_length=30)
    role = models.CharField(max_length=50)
    img_url = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.name} - {self.role}"

class Specialties(models.Model):
    specialty = models.CharField(max_length=30)

    def __str__(self):
        return self.specialty


class TrainerSpecialty(models.Model):
    trainer = models.ForeignKey(Trainers,on_delete=models.CASCADE)
    specialty = models.ForeignKey(Specialties,on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['trainer', 'specialty'],name='unique_trainer_specialty'
            )
        ]
    
    def __str__(self):
        return f"{self.trainer.name} - {self.specialty.specialty}"
    


class MembershipPlans(models.Model):
    name = models.CharField(max_length=30)
    price = models.CharField(max_length=10)
    description = models.CharField(max_length=50)
    popular = models.BooleanField(default=False)
    period = models.CharField(max_length=40,default="",blank=True,null=True)

    def __str__(self):
        return self.name


class MembershipPlanFeatures(models.Model):
    plan = models.ForeignKey(MembershipPlans,on_delete=models.CASCADE)
    feature = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.plan.name} - {self.feature}"


    


