from django.http import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
# Create your views here.
def landingPage(request):
    context={ }
    return render(request,"index.html",context)

def youtube(request):
    return redirect("www.youtube.com")  