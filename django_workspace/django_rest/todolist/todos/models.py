from django.db import models

class Todo(models.Model):
    objects = models.Manager()
    title = models.CharField(max_length=250)
    
