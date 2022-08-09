from django.urls import path
from . import views

urlpatterns = [
    path('BookingPage', views.BookingPage, name='BookingPage'),
    path('ConfirmBookingPage', views.ConfirmBookingPage, name='ConfirmBookingPage'),
    path('OTPPage', views.OTPPage, name='OTPPage'),
    path('OTPValidation', views.OTPValidation, name='OTPValidation'),
    path('BookingHistory', views.BookingHistory, name='BookingHistory'),
    path('ViewDetails/<int:id>/', views.ViewDetails, name='ViewDetails')
]
