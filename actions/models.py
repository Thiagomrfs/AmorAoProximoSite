from django.db import models

class Action(models.Model):
    categories = [
        ('EDU', 'Educação'),
        ('ESP', 'Esporte'),
        ('CLT', 'Cultura'),
        ('CNM', 'Comida na mesa')
    ]

    name = models.CharField(max_length=50)
    category = models.CharField(max_length=3, choices=categories, default='EDU')
    start_date = models.DateField()
    end_date = models.DateField()
    responsible = models.CharField(max_length=50)
    description = models.TextField()
    prerequisites = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
