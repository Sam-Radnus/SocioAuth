from django.urls import path
from . import views
from .views import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns=[
    path('', views.getRoutes),
    path('register/',views.RegisterUserAPIView.as_view(),name="registerPage"),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('discord/',views.discord_login,name="discord_login"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('oauth2/login/redirect',views.discord_login_redirect,name='discord_login_redirect')
    
]