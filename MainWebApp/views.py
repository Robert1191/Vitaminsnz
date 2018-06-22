from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.serializers.json import *
import datetime
import pytz
from django.core.urlresolvers import reverse
from models import *
from django.conf import settings

# Create your views here.
def index(request):
    return render(request, "MainWebApp/pages/index.html")