import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL: "https://api.themoviedb.org/3/",
  API_KEY: "5cb6e91b738a69ca58008c188eeebb3f",
  pathMovies: "search/movie",
  pathSeries: "search/tv",
  pathTrending: "/trending/all/day",
  pathCover: "https://image.tmdb.org/t/p/w342",
  search: '',
  movies: [],
  series: [],
  trending: [],
  fetchTrending(){
    let url = `${this.API_URL + this.pathTrending}?api_key=${this.API_KEY}`;
    axios
    .get(url)
    .then((response) => {
      this.trending = response.data.results;
      this.loading = false;
      this.movies= [];
      this.series= [];
    })
    .catch((err) => {
      console.log(err);
      console.error(err.messagge);
    });
  },
  fetchMovie() {
    let url = `${this.API_URL + this.pathMovies}?api_key=${this.API_KEY}&query=${this.search.toLowerCase()}`;
    axios
      .get(url)
      .then((response) => {
        this.movies = response.data.results;
        this.loading = false;
        this.trending= [];
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
  fetchSeries() {
    let url = `${this.API_URL + this.pathSeries}?api_key=${this.API_KEY}&query=${this.search.toLowerCase()}`;
    axios
      .get(url)
      .then((response) => {
        this.series = response.data.results;
        this.loading = false;
        this.trending= [];
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
