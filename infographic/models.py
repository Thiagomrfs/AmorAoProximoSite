from django.db import models

class Infographic(models.Model):
    price = models.FloatField(default=30)

    def __str__(self):
        return "Preço do infográfico"
