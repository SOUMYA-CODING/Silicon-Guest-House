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
    details = {}
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
        details = {
            'check_in': check_in,
            'check_out': check_out,
            'total_days': total_days,
            'total_peoples': total_peoples,
            'room_type': room_type,
            'total_rooms': total_rooms,
            'full_name': full_name,
            'email': email,
            'phone_number': phone_number,
            'address': address,
            'total_amount': total_amount,
        }
        print("Details", details)
        request.session['details'] = details
        deta = request.session.get('details')
        print(deta)
        return redirect('OTPPage')
    return render(request, 'bookingSection/confirm_booking.html')


# OTP Page
def OTPPage(request):
    userdata = request.session.get('details')
    print(userdata)
    useremail = userdata.get("email")
    print("e9mail = ", useremail)
    '''
    if not request.session.get("OTP"):
        otp = randint(111111, 999999)
        send_mail(
            "OTP from Silicon Guest House",
            f"Your OTP is {otp}",
            "soumyaprakashsahu2001@gmail.com",
            [useremail, ],
            fail_silently=False,
        )
        request.session["OTP"] = otp'''
    return render(request, 'bookingSection/otp.html')


# OTP Validation
def OTPValidation(request):
    return render(request, 'HomePage')
