# Generated by Django 3.2.4 on 2021-07-05 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='category',
            field=models.CharField(choices=[('ESP', 'Esporte'), ('CLT', 'Cultura'), ('CNM', 'Comida na mesa')], default='CLT', max_length=3),
        ),
    ]
