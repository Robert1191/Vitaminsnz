from django.db import models
# Create your models here.

class ROLES(models.Model):
    fullName = models.CharField(max_length=50)
    roleName = models.CharField(max_length=50)
    imageLink = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)