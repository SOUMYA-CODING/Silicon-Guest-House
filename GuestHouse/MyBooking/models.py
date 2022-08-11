from django.db import models
from django.contrib.auth.models import User


# Booking Model
class Booking(models.Model):
    username = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    check_in = models.DateField()
    check_out = models.DateField()
    total_days = models.IntegerField()
    total_peoples = models.IntegerField()
    room_type = models.CharField(max_length=15)
    total_rooms = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    full_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=50)
    total_amount = models.FloatField()

    def __str__(self):
        return self.full_name
