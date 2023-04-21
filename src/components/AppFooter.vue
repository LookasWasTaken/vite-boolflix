<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <div>sono un footer</div>
    </footer>
</template>

<style lang="scss">
footer{
    color: white;
    background-color: black;
    height: 7vh;
}
</style>