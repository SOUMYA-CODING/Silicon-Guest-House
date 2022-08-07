from django.shortcuts import render
from django.contrib.auth.models import User


# Admin Dashboard Page
def AdminDashboardPage(request):
    users = User.objects.all()

    totalUsers = users.count()
    context = {
        'users': users,
        'totalUsers': totalUsers,
    }
    return render(request, 'adminSection/customadmin.html', context)


# User Details Page
def UserDetailsPage(request):
    return render(request, 'adminSection/userdetails.html')
