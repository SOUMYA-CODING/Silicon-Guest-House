from django.shortcuts import render
from django.contrib.auth.models import User
from MyBooking.models import Booking


# Admin Dashboard Page
def AdminDashboardPage(request):
    # User Data
    users = User.objects.all().filter(is_superuser=0)

    # Booking
    booking = Booking.objects.all()
    totalBooking = booking.count()

    totalUsers = users.count()
    context = {
        'users': users,
        'totalUsers': totalUsers,
        'booking': booking,
        'totalBooking': totalBooking,
    }
    return render(request, 'adminSection/customadmin.html', context)


# User Details Page
def UserDetailsPage(request):
    return render(request, 'adminSection/userdetails.html')


# Booking Details Page
def BookingDetailsPage(request):
    return render(request, 'adminSection/bookingdetails.html')
