from django.shortcuts import render
from django.contrib.auth.models import User
from MyBooking.models import Booking


# Admin Dashboard Page
def AdminDashboardPage(request):
    # User Data
    users = User.objects.all().filter(is_superuser=0)

    # Booking
    booking = Booking.objects.all().order_by('-id')
    totalBooking = booking.count()
    total_amount = sum(Booking.objects.values_list('total_amount', flat=True))

    totalUsers = users.count()
    context = {
        'users': users,
        'totalUsers': totalUsers,
        'booking': booking,
        'totalBooking': totalBooking,
        'total_amount': total_amount,
    }
    return render(request, 'adminSection/customadmin.html', context)


# User Details Page
def UserDetailsPage(request):
    users_list = User.objects.all().filter(is_superuser=0).order_by('-id')
    context = {
        'users': users_list,
    }
    return render(request, 'adminSection/userdetails.html', context)


# Booking Details Page
def BookingDetailsPage(request):
    booking_list = Booking.objects.all().order_by('-id')
    context = {
        'booking_list': booking_list,
    }
    return render(request, 'adminSection/bookingdetails.html', context)


# User Data Upload
def UserDataUpload(request):
    return render(request, 'adminsection/userdataupload.html')


# User Booking Details
def UserBookigDetails(request, id):
    details = Booking.objects.get(id=id)
    context = {
        'details': details,
    }
    return render(request, 'adminsection/userbookingdetails.html', context)
