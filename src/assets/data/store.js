import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL: "https://api.themoviedb.org/3/search/movie",
  API_KEY: "5cb6e91b738a69ca58008c188eeebb3f",
  search: '',
  movies: [],
  fetchMovie() {
    let url = `${this.API_URL}?api_key=${this.API_KEY}&query=${this.search.toLowerCase()}`;
    axios
      .get(url)
      .then((response) => {
        this.movies = response.data.results;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
