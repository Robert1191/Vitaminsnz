from django.conf.urls import url
from MainWebApp import views
urlpatterns = [
    url(r'^$', views.home, name='home'),
]