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
            <h1>Netflix</h1>
            <div class="search">
                <div class="input-group mb-3">
                    <input @keyup.enter="store.fetchMovie()" type="text" class="form-control" placeholder="Search Movie"
                        aria-label="Search Movie" aria-describedby="button-addon2" v-model.trim="store.search">
                    <button @click="store.fetchMovie()" class="btn btn-outline-secondary" type="button"
                        id="button-addon2">Search</button>
                </div>
            </div>
        </nav>
        <div class="container">
            <ul>
                <li v-for="(movie, index) in store.movies">
                    <h2>Movie {{ index }}</h2>
                    <p>Title: {{ movie.title }}</p>
                    <p>Original title: {{ movie.original_title }}</p>
                    <p>Language: {{ movie.original_language }} <country-flag :country="setLanguage(movie.original_language)"
                            size='normal' :rounded="true" :shadow="true" /></p>
                    <p>Score: {{ movie.vote_average }}</p>
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
}
</style>