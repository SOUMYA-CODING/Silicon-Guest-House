from audioop import add
from django.shortcuts import render
from . models import Booking


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')


# Confirm Booking Page
def ConfirmBookingPage(request):
    if request.method == "POST":
        check_ins = request.POST.get("Check_in")
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

        print(check_ins, check_out, total_days, total_peoples, room_type, total_rooms, full_name, email, phone_number, address, total_amount)

    return render(request, 'bookingSection/confirm_booking.html')
