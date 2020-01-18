<template>
    <div id="app">
        <header-nav/>
        <router-view/>
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
