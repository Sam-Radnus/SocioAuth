from django.urls import path
from . import views

urlpatterns=[
    path('',views.landingPage,name="landingPage"),
    path('yt',views.youtube,name="YouTubePage"),
    path('me',views.discord_login,name="discord_login"),
    
]