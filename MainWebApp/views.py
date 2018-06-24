from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
from django.http import HttpResponse
from django.core.serializers.json import *
import datetime
import pytz
from django.core.urlresolvers import reverse
from .models import *
from django.conf import settings

# Create your views here.
def index(request):
    return render(request, "MainWebApp/pages/index.html")

def brands(request, variable):

    numberOfProduct = random.randint(5,20)

    listOfNumber = []

    answerSize = 0
    while answerSize < numberOfProduct:
        number = random.randint(1,20)
        if number not in listOfNumber:
            answerSize += 1
            listOfNumber.append(number)



    return render(request, "MainWebApp/pages/brands.html")
