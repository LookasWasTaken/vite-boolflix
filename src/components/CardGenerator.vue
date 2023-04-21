<script>
import { store } from "../assets/data/store";
import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'CardGenerator',
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
        },
        convertVote(score) {
            return Math.round(Number(score) / 2)
        },
    }
}
</script>

<template>
<h2 v-if="store.movies.length > 0" class="my-3">MOVIES</h2>
            <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3" v-if="store.movies.length > 0">
                <li class="col h-100 my-3" v-for="(movie, index) in store.movies">
                    <img class="img-fluid" v-if="movie.poster_path === null" src="../assets/img/nophoto.jpeg"
                        :alt="`${movie.title} cover image`">
                    <img class="img-fluid" v-else :src="`${store.pathCover}${movie.poster_path}`"
                        :alt="`${movie.title} cover image`">
                    <div class="text">
                        <p>#{{ index }} TITLE: {{ movie.title }}</p>
                        <p class="original" v-if="movie.title != movie.original_title">ORIGINAL TITLE: {{ movie.original_title }}</p>
                        <p class="overview">{{ movie.overview }}</p>
                        <p><country-flag :country="setLanguage(movie.original_language)" size='normal' :rounded="true"
                                :shadow="true" /></p>
                        <p class="d-flex align-items-center mb-0">
                            <svg v-for="n in convertVote(movie.vote_average)" xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg v-for="n in (5 - convertVote(movie.vote_average))" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                        </p>
                    </div>
                </li>
            </ul>
            <h2 v-if="store.series.length > 0" class="my-3">TV SHOW</h2>
            <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4" v-if="store.series.length > 0">
                <li class="col h-100 my-3" v-for="(serie, index) in store.series">
                    <img class="img-fluid" v-if="serie.poster_path === null" src="../assets/img/nophoto.jpeg"
                        :alt="`${serie.name} cover image`">
                    <img class="img-fluid" v-else :src="`${store.pathCover}${serie.poster_path}`"
                        :alt="`${serie.name} cover image`">
                    <div class="text">
                        <p>#{{ index }} TITLE: {{ serie.name }}</p>
                        <p class="original" v-if="serie.name != serie.original_name">ORIGINAL TITLE: {{ serie.original_name }}</p>
                        <p class="overview">{{ serie.overview }}</p>
                        <p><country-flag :country="setLanguage(serie.original_language)" size='normal' :rounded="true"
                                :shadow="true" /></p>
                        <p class="d-flex align-items-center">
                            <svg v-for="n in convertVote(serie.vote_average)" xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg v-for="n in (5 - convertVote(serie.vote_average))" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                        </p>
                    </div>
                </li>
            </ul>
</template>

<style lang="scss"></style>