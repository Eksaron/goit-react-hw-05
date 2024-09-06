// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       "Bearer .eyJhdWQiOiJlMmRhYzNmZjc5NmFhNzA4YzVkYmI4ZDI4ZTlmNjZhZSIsIm5iZiI6MTcyMzMwMTEwNy41NTA5Niwic3ViIjoiNjZiNjA4YWFkOTU1NzkzY2QyMDcxNjMyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-req0ka_JdrNvACd7qmOZzO2kr3hyyU04MJUVQ47FL4",
//   },
// };

// // axios
// //   .get(url, options)
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));
import axios from "axios";
/*
Application ID
637922
Access Key
qzthPZ-am69y9n4XW2o7-FWmsJqkdhAjWOWIMQcQDKI
Secret key
Vyi62tBqsNJgcGxCaYWwQCqFlEICa99GiLPp1lv-JNE
Note: both your Access Key and Secret Key must remain confidential.
*/

// const bearer_token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDhjYjRhMjE0OGVjODUzODQ4MDVkZGJkNjExMGUyNyIsInN1YiI6IjY2NWIxNDM0Nzg1NGEwZjkxNzEwMzU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1ujo4TTOWG8pQb4EToClARNvdN7K-v3ZEWNTcm11eU";
// const api_key = "8d8cb4a2148ec85384805ddbd6110e27";

const BASE_URL = "https://api.themoviedb.org/3";
const bearer_token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmRhYzNmZjc5NmFhNzA4YzVkYmI4ZDI4ZTlmNjZhZSIsIm5iZiI6MTcyNDUxNDMwMi4xNjQxMzgsInN1YiI6IjY2YjYwOGFhZDk1NTc5M2NkMjA3MTYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-X6U1BCVus8uNGwUhSvWlykcgMEys9Yj3mohj7rTdqM";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: bearer_token,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await instance.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await instance.get("/search/movie", {
    params: {
      query,
      page: 1,
      language: "en-US",
      include_adult: false, //true,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
