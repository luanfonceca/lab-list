# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-21 08:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDoList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
            ],
            options={
                'verbose_name': 'ToDoList',
                'verbose_name_plural': 'ToDoLists',
            },
        ),
    ]
