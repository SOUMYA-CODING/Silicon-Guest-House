from django.shortcuts import render


# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')
