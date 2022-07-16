from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from .forms import MyUserCreationForm
# Create your views here.
auth_url_discord="https://discord.com/api/oauth2/authorize?client_id=995330964840525914&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20email"
@api_view(('POST','GET'))
def registerPage(request):
    #print(request.method)
    form=MyUserCreationForm(request.POST)
    print(form)
    if form.is_valid():
       print(request.method)
       user=form.save(commit=False)
       user.save()
    return Response(status=200)

def login(request):
    pass