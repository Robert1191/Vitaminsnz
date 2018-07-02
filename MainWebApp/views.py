# -*- coding: utf-8 -*-
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

def home(request):
    return render(request,"MainWebApp/pages/home.html")

def about(request):
    return render(request,"MainWebApp/pages/about.html")

def projects(request):
    return render(request,"MainWebApp/pages/projects.html")

def contact(request):
    return render(request,"MainWebApp/pages/contact.html")