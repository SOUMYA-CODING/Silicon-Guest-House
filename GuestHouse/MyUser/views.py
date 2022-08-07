from django.shortcuts import render


# Home Page
def HomePage(request):
    return render(request, 'userSection/index.html')


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')


# Login Page
def LoginPage(request):
    return render(request, 'authentication/login.html')


# Registration Page
def RegistrationPage(request):
    return render(request, 'authentication/registration.html')
