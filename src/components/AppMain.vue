<script>
import { store } from "../assets/data/store";
import CardGenerator from "./CardGenerator.vue";

export default {
    name: 'AppMain',
    components: {
        CardGenerator,
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
    <main>
        <div class="container">
            <CardGenerator></CardGenerator>
        </div>
    </main>
</template>

<style lang="scss"></style>