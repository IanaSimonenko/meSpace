from rest_framework import viewsets

from .models import MessagePost
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = MessagePost.objects.all()
    serializer_class = MessageSerializer
