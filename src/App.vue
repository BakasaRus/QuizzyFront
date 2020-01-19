<template>
    <div id="app">
        <header-nav/>
        <router-view/>
        <footer class="footer has-background-grey-lighter">
            <div class="content has-text-centered">
                <p>Немножко тестов от <a href="https://vk.com/bakasa" target="_blank">@bakasa</a>.</p>
            </div>
        </footer>
    </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
    name: 'app',
    components: { HeaderNav }
}
</script>

<style>

</style>
