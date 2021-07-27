from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Country, TravelHistory, TraveledImages

def home(request):
	countries = Country.objects.all()
	images =  TraveledImages.objects.all().order_by('-id')[:5]

	return render(request,'index/home.html', {'countries': countries,'images':images})

def travel_history_details(request,country_id):
	travel_history = TravelHistory.objects.filter(country=country_id)
	return render(request,'index/travel_history.html', {'travel_history': travel_history})

def travel_history(request):
	country_id =request.POST.get("country_id")

	return JsonResponse({'success': True,'country_id':country_id})


# JSON RESPONSE
def home_data(request):
	countries = list(Country.objects.all().values())
	images =  list(TraveledImages.objects.all().order_by('-id')[:5].values())

	return JsonResponse({'countries': countries,'images':images})

def travel_details(request,country_id):
	travel_history = list(TravelHistory.objects.filter(country=country_id).values("country","location","date_visited","activities_performed","travel_images__images"))
	return JsonResponse({'travel_history': travel_history})

