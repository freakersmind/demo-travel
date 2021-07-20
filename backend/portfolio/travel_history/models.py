from django.db import models

'''
Country:
Location:
Date visited:
Activities performed:
Image:
'''


class Country(models.Model):
  country_name = models.CharField(max_length=200, help_text="Different country names")

  class Meta:
    verbose_name = ('country')
    verbose_name_plural = ('Countries')

  def __str__(self):

    return '%s' % (self.country_name)

class TraveledImages(models.Model):
	images = models.FileField(upload_to="static/images/traveled_places/", default="",help_text="Upload travelled pictures")

	def __str__(self):

		return '%s' % (self.images)

class TravelHistory(models.Model):
	country = models.ForeignKey(Country, models.CASCADE, verbose_name=('country'), related_name='countries', related_query_name='country',help_text="Foreign key to countries")
	location = models.CharField(max_length=200, help_text="Location visited into that country")
	date_visited = models.DateField(blank=True, null=True, help_text="Date visited")
	activities_performed = models.CharField(max_length=200, help_text="Activitity performed", default="")
	travel_images = models.ManyToManyField(TraveledImages, verbose_name=('Travelled images'), blank=True,
                                      related_name='travels', related_query_name='travel',help_text="different images of places visited")

	def __str__(self):

		return '%s' % (self.country)