from rest_framework import serializers
from django.contrib.auth.models import User 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

#serializers  to get User details using django token authentication
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["email","password"]

#serializer to register user
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(
    write_only=True, required=True)
  class Meta:
    model = User
    fields = ('username','email', 'password','password2','email','first_name','last_name')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
  def validate(self, attrs):
      if attrs['password']!=attrs['password2']:
        raise serializers.ValidationError({"password":"password fields don't match"})#raise generates an exception like throw
      return attrs  

  def create(self, validated_data):
    print('data')
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
    )
    user.set_password(validated_data['password'])
    user.save()
    return user
