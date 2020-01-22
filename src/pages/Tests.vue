<template>
    <section class="section">
        <div class="container">
            <div class="columns" v-if="tests.length > 0">
                <div v-for="test in tests" :key="test.id" class="column is-4">
                    <test-card :test="test"/>
                </div>
            </div>
            <p class="title is-4 has-text-centered" v-else>
                Тестов нет...
            </p>
        </div>
    </section>
</template>

<script>
import TestCard from "@/components/TestCard";

export default {
    name: "Tests",
    components: { TestCard },
    data: () => ({
        tests: []
    }),
    created() {
        this.axios.get('/api/tests')
            .then(response => this.tests = response.data);
    }
}
</script>

<style scoped>

</style>