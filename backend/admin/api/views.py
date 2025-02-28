from rest_framework import viewsets
from .models import *
from .serializers import studentSerializer

class studentViewSet(viewsets.ModelViewSet):
    queryset = student.objects.all()
    serializer_class = studentSerializer