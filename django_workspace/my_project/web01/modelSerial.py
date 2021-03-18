from rest_framework import serializers
from .models import User, Content, Reply

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','user_id','password']


class ContentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Content
        fields = ['id','title','context','cnt','userId_id']  # foreign key -> userId_id : "_"


class ReplySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Reply
        fields = ['id','user','replyCon','originalCon_id'] 