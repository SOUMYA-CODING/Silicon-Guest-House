from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePage, name='HomePage'),
    path('booking/', views.BookingPage, name='BookingPage'),
    path('login/', views.LoginPage, name='LoginPage'),
    path('registration/', views.RegistrationPage, name='RegistrationPage'),
    path('logout/', views.Logout, name='Logout'),
]
