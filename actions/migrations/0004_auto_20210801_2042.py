# Generated by Django 3.2.4 on 2021-08-01 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actions', '0003_alter_action_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='action',
            name='icon',
            field=models.CharField(choices=[('ball.png', 'bola'), ('books.png', 'livros'), ('food.png', 'comida'), ('gift.png', 'presente'), ('hat.png', 'chapéu'), ('music.png', 'notas musicais'), ('person.png', 'pessoa')], default='person.png', max_length=15),
        ),
        migrations.AlterField(
            model_name='action',
            name='prerequisites',
            field=models.CharField(max_length=100),
        ),
    ]
