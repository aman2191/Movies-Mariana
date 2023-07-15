from django.shortcuts import render

# Create your views here.

from .models import Movie

def movie_list(request):
    movies = Movie.objects.all()
    genres = Movie.objects.values_list('genres', flat=True).distinct()
    return render(request, 'movies/movie_list.html', {'movies': movies, 'genres': genres})
