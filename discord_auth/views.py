from os import access
from django.http import HttpResponse, JsonResponse
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer
from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import redirect

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import generics
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import requests
# Create your views here.
auth_url_discord="https://discord.com/api/oauth2/authorize?client_id=995332484810149899&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fapi%2Foauth2%2Flogin%2Fredirect&response_type=code&scope=identify%20email"
# @api_view(('POST','GET'))
# def registerPage(request):
#     #print(request.method)
#     print(request.body)
#     form=MyUserCreationForm(request.POST)
#     #print(form)
#     if form.is_valid():
#        print(request.method)
#        user=form.save(commit=False)
#        user.save()
#     return Response(status=200)

# def login(request):
#     pass

#Class based view to register user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        print(user.username)
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterUserAPIView(generics.CreateAPIView):   
    
    queryset=User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    print('data2')
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/',
        '/api/discord/',
        'oauth2/login/redirect',
    ]
    return Response(routes)


def discord_login(request):
    print("Hey")
    response=auth_url_discord
    return JsonResponse({"url":auth_url_discord})


def discord_login_redirect(request):
    code=request.GET.get('code')
    user=exchange_code(code)
    print(user)    
    return redirect('/api')

def exchange_code(code:str):
    data={
        "client_id":"995332484810149899",
        "client_secret":"UTqoTGKDbLas48gCVFU6gnJCis57MM9Y",
        "grant_type":"authorization_code",
        "code":code,
        "redirect_uri":"http://127.0.0.1:8000/api/oauth2/login/redirect",
        "scope":"identify"
    }    
    headers={
        'Content-Type':'application/x-www-form-urlencoded'
    }
    response=requests.post("https://discord.com/api/oauth2/token",data=data,headers=headers)
    #print(response)
    credentials=response.json()
    print(credentials)
    access_token=credentials['access_token']
    response=requests.get("https://discord.com/api/v6/users/@me",headers={
        'Authorization':'Bearer %s'%access_token
    })
    print(response)
    print(access_token)
    user=response.json()
    print(user)
    return user
