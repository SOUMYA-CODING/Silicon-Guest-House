from django.shortcuts import render


# Admin Dashboard Page
def AdminDashboardPage(request):
    return render(request, 'adminSection/customadmin.html')
