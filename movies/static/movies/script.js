$(document).ready(function() {
    $('#genre-filter').change(function() {
      var selectedGenres = $(this).val();
      $('.movie').each(function() {
        var movieGenres = $(this).data('genres').split(',');
        if (selectedGenres.length === 0 || movieGenres.some(g => selectedGenres.includes(g))) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  
    $('#title-search').keyup(function() {
      var searchString = $(this).val().toLowerCase();
      $('.movie').each(function() {
        var movieTitle = $(this).find('h3').text().toLowerCase();
        if (movieTitle.includes(searchString)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  