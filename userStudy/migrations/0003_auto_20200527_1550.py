# Generated by Django 3.0.6 on 2020-05-27 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userStudy', '0002_auto_20200527_1331'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='task1UBI1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task1UBI2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task1UBI3',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task2UBI1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task2UBI2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task2UBI3',
            field=models.IntegerField(default=0),
        ),
    ]