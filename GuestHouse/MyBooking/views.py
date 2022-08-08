from django.shortcuts import render
from . models import Booking


# Booking Page
def BookingPage(request):
    '''
    if request.method == "POST":
        check_in = request.POST.cleaned_data.get("Check_in")
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

        #booking_details = Booking(check_in=check_in, check_out=check_out, total_days=total_days, total_peoples=total_peoples, room_type=room_type, total_rooms=total_rooms, full_name=full_name, email=email, phone_number=phone_number, address=address, total_amount=total_amount)

        print(check_in, check_out, total_days, total_peoples, room_type,
              total_rooms, full_name, email, phone_number, address, total_amount)'''

    return render(request, 'bookingSection/booking.html')


# Confirm Booking Page
def ConfirmBookingPage(request):
    return render(request, 'bookingSection/confirm_booking.html')
