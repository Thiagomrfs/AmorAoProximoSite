from django.db import models

class Update(models.Model):
    titulo = models.CharField(max_length=100)
    data = models.DateTimeField()
    descricao = models.TextField()
