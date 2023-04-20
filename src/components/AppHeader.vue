<script>
import { store } from "../assets/data/store";
import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'AppHeader',
    components: {
        CountryFlag,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setLanguage(language) {
            switch (language) {
                case "ja":
                    return "jp";
                case "en":
                    return "gb";
                case "ko":
                    return "kr";
                // Altre lingue
                default:
                    return language;
            }
        }
    }
}
</script>

<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center">
            <div class="logo">
                <h1>Netflix</h1>
            </div>
            <div class="search">
                <div class="input-group mb-3">
                    <input @keyup.enter="store.fetchMovie(), store.fetchSeries()" type="text" class="form-control"
                        placeholder="Search Movie" aria-label="Search Movie" aria-describedby="button-addon2"
                        v-model.trim="store.search">
                    <button @click="store.fetchMovie(), store.fetchSeries()" class="btn btn-outline-secondary" type="button"
                        id="button-addon2">Search</button>
                </div>
            </div>
        </nav>
        <div class="container">
            <ul v-if="store.movies.length > 0">
                <li>
                    <h2>Movies</h2>
                </li>
                <li v-for="(movie, index) in store.movies">
                    <img v-if="movie.poster_path" :src="`${store.pathCover}${movie.poster_path}`" :alt="`${movie.title} cover image`">
                    <h2>Movie {{ index }}</h2>
                    <p>Title: {{ movie.title }}</p>
                    <p v-if="movie.title != movie.original_title">Original title: {{ movie.original_title }}</p>
                    <p>Language: {{ movie.original_language }} <country-flag :country="setLanguage(movie.original_language)"
                            size='normal' :rounded="true" :shadow="true" /></p>
                    <p>Score: {{ movie.vote_average }}</p>
                </li>
            </ul>
            <ul v-if="store.series.length > 0">
                <li>serie
                    <h2>Series</h2>
                </li>
                <li v-for="(serie, index) in store.series">
                    <img v-if="serie.poster_path" :src="`${store.pathCover}${serie.poster_path}`" :alt="`${serie.name} cover image`">
                    <h2>Serie {{ index }}</h2>
                    <p>Title: {{ serie.name }}</p>
                    <p v-if="serie.name != serie.original_name">Original title: {{ serie.original_name }}</p>
                    <p>Language: {{ serie.original_language }} <country-flag :country="setLanguage(serie.original_language)"
                            size='normal' :rounded="true" :shadow="true" /></p>
                    <p>Score: {{ serie.vote_average }}</p>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
header {
    color: white;
    background-color: black;
    padding: 1rem;

    ul {
        list-style: none;
    }
}</style>