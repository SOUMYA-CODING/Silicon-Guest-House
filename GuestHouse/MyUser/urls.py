from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePage, name='HomePage'),
    path('booking/', views.BookingPage, name='BookingPage'),
]
