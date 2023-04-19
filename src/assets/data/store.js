import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=2481",
  movies: null,
  fetchMovie(url) {
    axios
      .get(url)
      .then((response) => {
        this.cards = response.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
