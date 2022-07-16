from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(models.Model):
     email=models.EmailField(unique=True,null=True)
     password=models.CharField(null=True,max_length=50)

     def __str__(self) -> str:
          return self.name