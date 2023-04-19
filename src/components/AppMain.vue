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
        <div>sono un main</div>
    </main>
</template>

<style lang="scss">
main{
    background-color: red;
}
</style>