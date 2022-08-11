from random import randint
from django.shortcuts import render, redirect
from . models import Booking
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth.models import User


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')


# Confirm Booking Page
def ConfirmBookingPage(request):
    # User
    current_user = request.user
    print("Current User : ", current_user)
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
            'user_username': str(current_user),
        }
        request.session['details'] = details
        return redirect('OTPPage')
    return render(request, 'bookingSection/confirm_booking.html')


# OTP Page
def OTPPage(request):
    userdata = request.session.get('details')
    print(userdata)
    useremail = userdata.get("email")
    print("e9mail = ", useremail)
    if not request.session.get("OTP"):
        otp = randint(111111, 999999)
        send_mail(
            "OTP from Silicon Guest House",
            f"Your OTP is {otp}",
            "soumyaprakashsahu2001@gmail.com",
            [useremail, ],
            fail_silently=False,
        )
        request.session["OTP"] = otp
        viewotp = request.session.get('OTP')
        print("OTp = ", viewotp)
    return render(request, 'bookingSection/otp.html')


# OTP Validation
def OTPValidation(request):
    if request.method == "POST":
        otp = request.POST.get("otp")

        if request.session.get("OTP") != int(otp):
            messages.error(request, "Invalid OTP")
            return redirect("OTPPage")
        else:
            bookingDetails = request.session.get("details")
            if bookingDetails:
                book = Booking(check_in=bookingDetails.get("check_in"), check_out=bookingDetails.get("check_out"), total_days=bookingDetails.get("total_days"), total_peoples=bookingDetails.get("total_peoples"), room_type=bookingDetails.get("room_type"),
                               total_rooms=bookingDetails.get("total_rooms"), full_name=bookingDetails.get("full_name"), email=bookingDetails.get("email"), phone_number=bookingDetails.get("phone_number"), address=bookingDetails.get("address"), total_amount=bookingDetails.get("total_amount"), user_username=bookingDetails.get("user_username"))
                book.save()

                del request.session["details"]
                del request.session["OTP"]
    return redirect('HomePage')


# My Booking History Page
def BookingHistory(request):
    booked = Booking.objects.filter(user_username=request.user).order_by('-id')
    context = {
        "bookingDetails": booked,
    }
    return render(request, 'bookingSection/booking_history.html', context)
