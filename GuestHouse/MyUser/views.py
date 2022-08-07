from django.shortcuts import render


# Home Page
def HomePage(request):
    return render(request, 'userSection/index.html')

# Booking Page
def BookingPage(request):
    return render(request, 'bookingSection/booking.html')
