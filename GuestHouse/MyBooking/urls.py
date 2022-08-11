from django.urls import path
from . import views

urlpatterns = [
    path('BookingPage', views.BookingPage, name='BookingPage'),
    path('ConfirmBookingPage', views.ConfirmBookingPage, name='ConfirmBookingPage'),
    path('OTPPage', views.OTPPage, name='OTPPage'),
    path('OTPValidation', views.OTPValidation, name='OTPValidation'),
    path('BookingHistory/<str:username>/', views.BookingHistory, name='BookingHistory'),
]
