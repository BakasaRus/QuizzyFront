<template>
    <div id="app">
        <header-nav/>
        <transition name="fade"
                    mode="out-in">
            <router-view/>
        </transition>
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
