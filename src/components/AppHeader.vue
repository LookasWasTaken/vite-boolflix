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
        <div>sono un header</div>
    </header>
</template>

<style lang="scss">
header{
    color: white;
    background-color: black;
}
</style>