from django.urls import path
from . import views

urlpatterns = [
    path('myAdmin/', views.AdminDashboardPage, name='AdminDashboardPage'),
    path('userDetails/', views.UserDetailsPage, name='UserDetailsPage'),
    path('bookingDetails/', views.BookingDetailsPage, name='BookingDetailsPage'),
    path('userDataUpload/', views.UserDataUpload, name='UserDataUpload'),
    path('userBookigDetails/<int:id>/', views.UserBookigDetails, name='UserBookigDetails'),
]
