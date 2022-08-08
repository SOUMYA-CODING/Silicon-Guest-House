from django.urls import path
from . import views

urlpatterns = [
    path('BookingPage', views.BookingPage, name='BookingPage'),
    path('ConfirmBookingPage', views.ConfirmBookingPage, name='ConfirmBookingPage'),
]
