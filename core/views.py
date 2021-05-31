from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from core.models import Restorant
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, RestorantSerializer
from rest_framework import viewsets


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)


class RestorantViewset(viewsets.ModelViewSet):
    """For django Restorant model api."""

    queryset = Restorant.objects.all()
    serializer_class = RestorantSerializer
    permission_classes = (permissions.AllowAny,)

    
