# Generated by Django 4.0.4 on 2022-08-11 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyBooking', '0002_rename_username_booking_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='user_username',
            field=models.CharField(max_length=15),
        ),
    ]