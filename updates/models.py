from django.db import models

def upload_to(instance, filename):
    return f'updates/{filename}'

class Update(models.Model):
    titulo = models.CharField(max_length=55)
    data = models.DateTimeField()
    imagem = models.ImageField(upload_to=upload_to, default='updates/socialist-dog.jpg')

    def __str__(self):
        return self.titulo
