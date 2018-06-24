from __future__ import unicode_literals

from django.db import models

# Create your models here.

class brandModel(models.Model):
    name = models.CharField(max_length=50)
    # imageLink = models.CharField(max_length=50)
    # cost = models.CharField(max_length=50)