<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppMain',
    components: {
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="container main_bg">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-5">
            <!-- <MovieItem :movie="movie" v-for="movie in store.movies"></MovieItem> -->
            <!-- <MovieItem></MovieItem> -->
            <!-- aggiungi v-if="!store.loading" -->
            <!-- <div class="loader">
                 aggiungi v-else 
                Loading...
            </div> -->
            <div>sono un main</div>
        </div>
    </section>
        </div>
    </main>
</template>

<style lang="scss">
main{
    background-color: red;
}
</style>