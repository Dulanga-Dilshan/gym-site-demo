from rest_framework import response,status
from rest_framework.decorators import api_view
from services.services import save_contact_message

@api_view(['POST'])
def contact_message(request):
    if request.method == 'POST':
        data = request.data
        try:
            save_contact_message(
                name=data.get('name'),
                email=data.get('email'),
                message=data.get('message')
            )
        except ValueError as e:
            return response.Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        return response.Response({'message': 'Message received successfully'}, status=status.HTTP_200_OK)
    
    return response.Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)