from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('MyUser.urls')),
    path('Booking/', include('MyBooking.urls')),
    path('Admin/', include('MyAdmin.urls')),
]
