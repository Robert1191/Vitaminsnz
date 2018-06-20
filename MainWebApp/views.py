# -*- coding: utf8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .back_end.forms import *
from django.http import HttpResponse
from django.core.serializers.json import *
from .back_end.emailServices import *
from .back_end.dataConnect import *
import datetime
import pytz
from django.core.urlresolvers import reverse
from models import *
from django.conf import settings

# Create your views here.
def index(request):
    return render(request,"MainWebApp/index.html")

def about(request):

    db = dataConnect()
    cur = db.createConnection()

    mainStaffList = []
    if cur != False:
        # cur.execute("""SELECT r.descriptions from roles r""")
        cur.execute("""
        select concat(s.lastname::text, ' ',  s.middlename::text, ' ', s.firstname::text) AS fullname , s.imagelink
            , 
            case 
            when r.descriptions = 'Owner' then 'Chủ Cơ Sở'
            else r.descriptions
            end
            from STAFF s left join ROLES r 
            on r.id = s.Roleid 
            where s.isactive = True AND r.isactive = True;
        """)

        rows = cur.fetchall()

        for row in rows:
            roles = ROLES()
            roles.fullName = row[0]
            roles.imageLink = row[1]
            roles.roleName = row[2]
            roles.description = '<p> hello </p> <p> hello2 </p>'
            mainStaffList.append(roles)
        db.closeConnection()
    else:
        print("error")

    return render(request, "MainWebApp/about.html", {'mainStaffList': mainStaffList})

def contact(request):
    if request.method == "POST":
        form = ContactEmailForm(request.POST)
        if form.is_valid():
            subject = "Email của " + form.cleaned_data['name']

            if form.cleaned_data['phone'] != "":
                subject = subject + ", sđt (" + form.cleaned_data['phone'] + ")"

            if form.cleaned_data['address'] != "":
                subject = subject + ", đc (" + form.cleaned_data['address'] + ")"

            subject = subject + ", gửi vào lúc " + datetime.datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')).strftime("%d-%m-%Y %H:%M:%S")
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
        return render(request,"MainWebApp/contact.html")

def projects(request):
    return render(request,"MainWebApp/projects.html")

def staffLoginSection(request):
    if request.method == "POST":
        form = staffLoginForm(request.POST)
        if form.is_valid():
            if form.cleaned_data['loginName'] == "abc" and form.cleaned_data['password'] == "abc":
                return redirect(reverse('index'))
            else:
                return redirect("projects")
        else:
            print(form.errors)
    else:
        return redirect("projects")