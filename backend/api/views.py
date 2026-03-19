from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base import services
from django.core.exceptions import ValidationError
from rest_framework import status
from api.serializers import ContactMessageSerializer

# Create your views here.

@api_view(['POST'])
def contact(request):
    try:
        serializered_message=ContactMessageSerializer(services.create_contact_message(request.data['name'],request.data['email'],request.data['message']))

    except ValidationError as e:
        return Response({'message': 'error submiting form','detail':e.message},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'message': 'Contact form submitted successfully','data':serializered_message.data},status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_services(request):
    try:
        data=services.get_all_services()
    except Exception:
        return Response({'message': 'somthing went wrong'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'services':data},status=status.HTTP_200_OK)

@api_view(['GET'])
def get_trainers(request):
    try:
        data = services.get_all_trainers()
    except Exception:
        return Response({'message': 'somthing went wrong'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'trainers':data},status=status.HTTP_200_OK)

@api_view(['GET'])
def get_membership_plans(request):
    try:
        data = services.get_all_membership_plans()
    except Exception:
        return Response({'message': 'somthing went wrong'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'plans':data},status=status.HTTP_200_OK)
