# Generated by Django 3.0.6 on 2020-05-28 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userStudy', '0006_auto_20200528_1036'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='task1Buy',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='task2Buy',
            field=models.IntegerField(default=0),
        ),
    ]