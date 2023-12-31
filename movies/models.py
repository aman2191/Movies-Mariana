from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    poster = models.ImageField(upload_to='movies/images/')
    genres = models.CharField(max_length=100)
    rating = models.FloatField()
    year_release = models.IntegerField()
    metacritic_rating = models.IntegerField()
    runtime = models.IntegerField()

    def __str__(self):
        return self.title

