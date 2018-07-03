# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .back_end.forms import *
from .back_end.emailServices import *
from django.core.serializers.json import *
import pytz
from django.http import HttpResponse

# import random
# import datetime
# from django.core.urlresolvers import reverse
# from .models import *
# from django.conf import settings

# Create your views here.

def home(request):
    return render(request,"MainWebApp/pages/home.html")

def about(request):
    return render(request,"MainWebApp/pages/about.html")

def projects(request):
    return render(request,"MainWebApp/pages/projects.html")

def contact(request):
    if request.method == "POST":
        form = ContactEmailForm(request.POST)
        if form.is_valid():
            subject = "Email của " + form.cleaned_data['name']

            if form.cleaned_data['phone'] != "":
                subject = subject + ", sđt (" + form.cleaned_data['phone'] + ")"

            if form.cleaned_data['address'] != "":
                subject = subject + ", đc (" + form.cleaned_data['address'] + ")"

            subject = subject + ", gửi vào lúc " + datetime.datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')).strftime(
                "%d-%m-%Y %H:%M:%S")
            email = EmailService()
            email.emailConstruct(subject, form.cleaned_data['message'], form.cleaned_data['email'],
                                 ['robert01011991@gmail.com'])
            sendEmailResult = email.sendEmail()

            if sendEmailResult == True:
                return HttpResponse(json.dumps("success"), content_type='application/json')
            else:
                return HttpResponse(json.dumps("failed"), content_type='application/json')
        else:
            print(form.errors)
    else:
        return render(request, "MainWebApp/pages/contact.html")

