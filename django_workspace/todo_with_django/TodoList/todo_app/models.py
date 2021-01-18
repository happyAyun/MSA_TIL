from django.db import models

# Create your models here.

# entity - models.Model 상속을 받아 구현함. # models.Model 을 상속받으면 모델로 관리함.
class Todo(models.Model):
    objects = models.Manager()
    content = models.CharField(max_length=255)
    