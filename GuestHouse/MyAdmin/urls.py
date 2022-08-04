from django.urls import path
from . import views

urlpatterns = [
    path('myAdmin/', views.AdminDashboardPage, name='AdminDashboardPage'),
]
