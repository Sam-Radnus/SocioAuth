from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
# Create your views here.
auth_url_discord="https://discord.com/api/oauth2/authorize?client_id=995330964840525914&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fapi%2Fwelcome%2Fauth&response_type=code&scope=identify%20email"
def landingPage(request):
    context={ }
    return render(request,"index.html",context)

def youtube(request):
    return redirect("www.youtube.com")  

def discord_login(request:HttpResponse):
    print("authed")
    return redirect(auth_url_discord)    

    