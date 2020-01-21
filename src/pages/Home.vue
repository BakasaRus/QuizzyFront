<template>
    <div>
        <section class="hero is-link is-large">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <p class="title">
                                Простой интерфейс.
                                <br>
                                Множество возможностей.
                            </p>
                            <b-button size="is-large" type="is-primary" inverted outlined>
                                <strong>Попробовать</strong>
                            </b-button>
                        </div>
                        <div class="column">
                            <p class="subtitle">
                                Вот тут будут классные скрины системы, но позже
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns" v-if="tests.length > 0">
                    <div v-for="test in tests" :key="test.id" class="column is-4">
                        <test-card :test="test"/>
                    </div>
                </div>
                <p class="title is-4 has-text-centered" v-else>
                    Грузим список тестов...
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import TestCard from "@/components/TestCard";

export default {
    name: 'HelloWorld',
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
