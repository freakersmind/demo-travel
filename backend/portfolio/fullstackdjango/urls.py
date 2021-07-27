"""fullstackdjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
#
from travel_history import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    # frontend
    path('home_data', views.home_data, name='home_data'),
    path('travel-history/', views.travel_history, name='travel_history'),
    path('travel-history-details/<int:country_id>', views.travel_history_details, name='travel_history_details'),
    #frontend
    path('travel-details/<int:country_id>', views.travel_details, name='travel_details'),
]
