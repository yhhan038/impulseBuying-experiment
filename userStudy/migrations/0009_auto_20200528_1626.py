# Generated by Django 3.0.6 on 2020-05-28 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userStudy', '0008_auto_20200528_1126'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='ibt1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='ibt2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='ibt3',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='ibt4',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='ibt5',
            field=models.IntegerField(default=0),
        ),
    ]