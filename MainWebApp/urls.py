from django.conf.urls import url, include
from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^brands/(?P<variable>.*)/$', views.brands, name='brands'),
    # url(r'^sample/', views.sample, name='sample')
    # url(r'^sample/(?P<variable>\d+)/$', views.sample, name='sample'),
    # url(r'^about/', views.about, name='about'),
    # url(r'^contact/', views.contact, name='contact'),
    # url(r'^projects/', views.projects, name='projects'),
    # url(r'^staffLoginSection/', views.staffLoginSection, name='staffLoginSection'),
]