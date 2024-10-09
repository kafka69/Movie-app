import axios from 'axios';

// Base URL for TMDb
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWRlMDkwNGYyYzg2Yzg0NGFhYzJjZjRhYTkyMmI4YSIsIm5iZiI6MTcyNzU5MzY2Mi4yOTU3NjYsInN1YiI6IjY2ZWMyNjBhNTE2OGE4OTZlMTIwMGY2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRE2MmBiDsre9JWEEDf_Fnh6SzC0_C14bctuyx6Yq1o';

// Search for movies with query
export const searchMovies = async (query) =>{
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: API_KEY,
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by category', error);
    throw error;
  }
}

// Get movies by category 
export const getMoviesByCategory = async (genreId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`,
      {
        headers: {
          Authorization: API_KEY,
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by category', error);
    throw error;
  }
}

// Get movies categories
export const getMovieCategories = async ()=>{
  try{
    const response = await axios.get(`${BASE_URL}/genre/movie/list?language=en`, {
      headers: {
        Authorization: API_KEY,
        Accept: 'application/json',
      },
    });
    return response.data.genres;
  }catch(error){
    console.error('Error fetching movie detail', error);
    throw error;
  }
}

// Get movie's detail by id
export const getDetailByID = async (id) =>{
  try{
    const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, {
      headers: {
        Authorization: API_KEY,
        Accept: 'application/json',
      },
    });
    // console.log(response.data)
    return response.data;
  }catch(error){
    console.error('Error fetching movie detail', error);
    throw error;
  }
}
// Get all the movies
export const getMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?top_rated?language=en-US&page=${page}`, {
      headers: {
        Authorization: API_KEY,
        Accept: 'application/json',
      },
    });
    // console.log(response.data.results)
    return response.data.results;
  }catch(error){
    console.error('Error fetching all movies', error);
    throw error;
  }

}

// Function to fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
      headers: {
        Authorization: API_KEY,
        Accept: 'application/json',
      },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies', error);
    throw error;
  }
};
