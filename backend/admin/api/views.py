from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import student
from .serializers import studentSerializer

class studentViewSet(viewsets.ModelViewSet):
    queryset = student.objects.all()
    serializer_class = studentSerializer

    def retrieve(self, request, pk=None):
        obj = get_object_or_404(student, id=pk)
        serializer = self.get_serializer(obj)
        return Response(serializer.data)