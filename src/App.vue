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
import { setters } from "@/store";

export default {
    name: 'app',
    components: { HeaderNav },
    created() {
        this.axios.get('/api/user')
            .then(response => setters.setUser(response.data));
    }
}
</script>

<style>

</style>
