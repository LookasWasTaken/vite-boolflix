<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppHeader',
    components: {
    },
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>

<template>
    <header class="px-5">
        <div class="logo d-flex justify-content-between align-items-center">
            <img class="img-fluid" src="../assets/img/logo.svg" width="200" alt="">
        </div>
        <div class="search">
            <div class="input-group">
                <input @keyup.enter="store.fetchMovie(), store.fetchSeries()" type="text" class="form-control"
                    placeholder="Cosa vuoi vedere?" aria-label="Search Movie" aria-describedby="button-addon2"
                    v-model.trim="store.search">
                <button @click="store.fetchMovie(), store.fetchSeries()" class="btn btn-outline-secondary" type="button"
                    id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
    background-color: black;
    padding: 1rem;
    height: 13vh;
}
</style>