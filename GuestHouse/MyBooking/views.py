from random import randint
from django.shortcuts import render, redirect
from . models import Booking
from django.core.mail import send_mail
from django.contrib import messages


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')


# Confirm Booking Page
def ConfirmBookingPage(request):
    if request.method == "POST":
        check_in = request.POST.get("Check_in")
        check_out = request.POST.get("Check_out")
        total_days = request.POST.get("total_days")
        total_peoples = request.POST.get("total_people")
        room_type = request.POST.get("room_type")
        total_rooms = request.POST.get("number_of_rooms")
        full_name = request.POST.get("Name")
        email = request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        address = request.POST.get("address")
        total_amount = request.POST.get("total_amount_price")

        # Store Data in Session
        request.session['check_in'] = check_in
        request.session['check_out'] = check_out
        request.session['total_days'] = total_days
        request.session['total_peoples'] = total_peoples
        request.session['room_type'] = room_type
        request.session['total_rooms'] = total_rooms
        request.session['full_name'] = full_name
        request.session['email'] = email
        request.session['phone_number'] = phone_number
        request.session['address'] = address
        request.session['total_amount'] = total_amount

        # To Check
        # demo = request.session.get('bookingDetails'):
        # print("demo", demo)
    return render(request, 'bookingSection/confirm_booking.html')

#2022-08-24
# OTP Page
def OTPPage(request):
    demo = request.session.get('phone_number')
    print("demo", demo)
    return render(request, 'bookingSection/otp.html')


# OTP Validation
def OTPValidation(request):
    return render(request, 'HomePage')
