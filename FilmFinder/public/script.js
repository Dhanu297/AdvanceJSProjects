const tmdbKey = 'b3cb6632ef59e9f47f79db8471fb50b0';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const playBtn = document.getElementById('playBtn');

const  getGenres = async() => {
const genreRequestEndpoint  = 'https://api.themoviedb.org/3/genre/movie/list';
const requestParams  = `?api_key=${tmdbKey}`;
const urlToFetch = genreRequestEndpoint + requestParams;
try
  {
      const response = await fetch(urlToFetch,{ cache: 'no-cache' });
      if(response.ok)
      {
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         const genres =jsonResponse.genres;
         return genres;
      } 
  }
  catch(error)
  {
    console.log(error);
  }
};

const getMovies = async() => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint ='https://api.themoviedb.org/3/discover/movie';
  const requestParams  = `?api_key=${tmdbKey}&with_genres=${selectedGenre }`;
urlToFetch = discoverMovieEndpoint + requestParams;
try
  {
      const response = await fetch(urlToFetch,{ cache: 'no-cache' });
      if(response.ok)
      {
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         const movies =jsonResponse.results;
         return movies;
      } 
  }
  catch(error)
  {
    console.log(error);
  }
};
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const urlToFetch = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbKey}`;
  try
  {
      const response = await fetch(urlToFetch,{ cache: 'no-cache' });
      if(response.ok)
      {
         const movieInfo = await response.json();
         console.log(movieInfo);
        
         return movieInfo;
      } 
  }
  catch(error)
  {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async() => {
  const movies = await getMovies();
  const randomMovie =getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  const movieInfo = document.getElementById('movieInfo');

  
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
 displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;