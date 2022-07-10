from django.urls import path
from . import views

urlpatterns=[
    path('welcome',views.landingPage,name="landingPage"),
    path('yt',views.youtube,name="YouTubePage")
]