from django.db import models

class Action(models.Model):
    categories = [
        ('EDU', 'Educação'),
        ('ESP', 'Esporte'),
        ('CLT', 'Cultura'),
        ('CNM', 'Comida na mesa')
    ]

    icons = [
        ("ball.png", "bola"),
        ("books.png", "livros"),
        ("food.png", "comida"),
        ("gift.png", "presente"),
        ("hat.png", "chapéu"),
        ("music.png", "notas musicais"),
        ("abc.png", "quador com ABC"),
        ("art.png", "tinta e pincel"),
        ("ballet.png", "sapatilha de ballet"),
        ("berimbau.png", "berimbau"),
        ("dance.png", "pessoas dançando"),
        ("football_shoes.png", "chuteira"),
        ("kimono.png", "faixa de jiu-jitsu"),
        ("love.png", "amor ao próximo"),
        ("math.png", "matemática"),
        ("movie.png", "plaqueta de filme"),
        ("plate.png", "prato com garfo e faca"),
        ("theatre.png", "teatro"),
        ("veggies.png", "vegetais"),
    ]

    name = models.CharField(max_length=50)
    category = models.CharField(max_length=3, choices=categories, default='EDU')
    icon = models.CharField(max_length=30, choices=icons, default='love.png')
    start_date = models.DateField()
    end_date = models.DateField()
    responsible = models.CharField(max_length=50)
    description = models.TextField()
    prerequisites = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
