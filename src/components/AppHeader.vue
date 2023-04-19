<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
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
                    <input type="text" class="form-control" placeholder="Search Movie"
                        aria-label="Search Movie" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
header {
    color: white;
    background-color: black;
    padding: 1rem;
}
</style>