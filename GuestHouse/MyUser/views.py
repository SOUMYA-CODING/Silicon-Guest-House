from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


# Home Page
def HomePage(request):
    return render(request, 'userSection/index.html')


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')


# Login Page
def LoginPage(request):
    # Error
    error = False

    # Get the data
    if request.method == "POST":
        username = request.POST.get('sic_number')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('HomePage')
        else:
            messages.error(request, "Invalid username or password")

    return render(request, 'authentication/login.html')


# Registration Page
def RegistrationPage(request):
    # Error
    error = False

    # Get the data
    if request.method == "POST":
        username = request.POST.get('sic_number')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Checking if SIC Number already exists or not
        if User.objects.filter(username=username).exists():
            messages.error(request, "SIC Number already exists.")
            error = True

        # Checking if some error are there
        if error:
            return render(request, 'authentication/registration.html')

        # Create User
        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password
            )
            user.save()
            messages.success(
                request, "Account created Successfully. Login to continue"
            )
            return redirect('LoginPage')

        except Exception as e:
            messages.error(request, e)

    return render(request, 'authentication/registration.html')


# Logout
def Logout(request):
    logout(request)
    return redirect('HomePage')
