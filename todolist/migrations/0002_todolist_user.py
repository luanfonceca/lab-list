# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-06-28 21:10
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('todolist', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todolist',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='todolists', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
