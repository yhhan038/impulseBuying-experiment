# Generated by Django 3.0.6 on 2020-08-04 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userStudy', '0009_auto_20200528_1626'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='employee',
            field=models.CharField(default='-', max_length=200),
        ),
        migrations.AddField(
            model_name='answer',
            name='imp1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='imp2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='imp3',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='imp4',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='income',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus10',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus11',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus12',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus3',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus4',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus5',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus6',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus7',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus8',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='sus9',
            field=models.IntegerField(default=0),
        ),
    ]
