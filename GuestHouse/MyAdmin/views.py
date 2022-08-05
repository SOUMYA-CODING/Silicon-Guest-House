from django.shortcuts import render


# Admin Dashboard Page
def AdminDashboardPage(request):
    return render(request, 'adminSection/customadmin.html')


# User Details Page
def UserDetailsPage(request):
    return render(request, 'adminSection/userdetails.html')
