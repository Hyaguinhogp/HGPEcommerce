from rest_framework import generics
from .models import User
from .serializers import AccountSerializer
from rest_framework.permissions import IsAdminUser


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = AccountSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAdminUser]
