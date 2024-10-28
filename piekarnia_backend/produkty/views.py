# Create your views here.
from django.shortcuts import render
from .models import Produkt
from .serializers import ProduktSerializer
from rest_framework import viewsets

def lista_produktow(request):
    produkty = Produkt.objects.all()
    return render(request, 'produkty/lista_produktow.html', {'produkty': produkty})

class ProduktViewSet(viewsets.ModelViewSet):
    queryset = Produkt.objects.all()
    serializer_class = ProduktSerializer