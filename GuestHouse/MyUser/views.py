from django.shortcuts import render

# Home Page
def HomePage(request):
    return render(request, 'userSection/index.html')
