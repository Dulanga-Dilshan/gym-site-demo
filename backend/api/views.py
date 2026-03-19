from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def contact(request):
    data = request.data
    print(data)
    return Response({'message': 'Contact form submitted successfully'})




