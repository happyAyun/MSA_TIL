from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .memberdto import MemberSerializer
from .models import Member

# class MemberViewSet(viewsets.ModelViewSet):
#     queryset = Member.objects.all() # python 객체
#     serializer_class = MemberSerializer # 직렬화


@api_view(['GET'])
def memberList(request):
    members = Member.objects.all()
    serializer = MemberSerializer(members, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def memberDetail(request, pk):
    member = Member.objects.get(id=pk)
    serializer = MemberSerializer(member, many=False) # false 생략가능
    return Response(serializer.data)

@api_view(['DELETE'])
def memberDelete(request,pk):
    member = Member.objects.get(id=pk)
    member.delete()
    return Response('Deleted!!')

@api_view(['PUT'])
def memberUpdate(request,pk):
    member = Member.objects.get(id=pk)
    serializer = MemberSerializer(instance = member, data=request.data)
    if(serializer.is_vaild()):
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def memberCreate(request):
    serializer = MemberSerializer(data=request.data)
    if(serializer.is_vaild()):
        serializer.save()
    return Response(serializer.data)