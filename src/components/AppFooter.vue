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
    <footer class="d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="d-flex align-items-center justify-content-center gap-3">
                <span>&copy; Netflix 1997-2023</span>
                <span>Developed by <a href="https://github.com/LookasWasTaken">LookasWasTaken</a></span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss"></style>