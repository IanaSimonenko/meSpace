from rest_framework import serializers

from .models import MessagePost


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessagePost
        fields = ('id', 'text', 'created_date', 'is_readed')
