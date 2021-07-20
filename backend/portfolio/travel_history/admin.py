from django.contrib import admin
from .models import Country, TraveledImages,TravelHistory

# Register your models here.
admin.site.register(Country)
admin.site.register(TraveledImages)
admin.site.register(TravelHistory)