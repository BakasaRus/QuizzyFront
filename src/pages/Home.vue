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
                <div class="columns">
                    <div v-for="test in tests" :key="test.id" class="column is-4">
                        <test-card :test="test"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TestCard from "@/components/TestCard";
export default {
    name: 'HelloWorld',
    components: {TestCard},
    data: () => ({
        tests: [
            {
                id: 1,
                title: 'Контроллеры в Laravel',
                description: 'Полное описание теста',
                author: {
                    id: 1,
                    full_name: 'Николай Андреев'
                },
                image: 'https://laravel.com/img/logomark.min.svg',
                difficulty: 3
            },
            {
                id: 2,
                title: 'Вычисляемые свойства во Vue.js',
                description: 'Полное описание теста',
                author: {
                    id: 1,
                    full_name: 'Николай Андреев'
                },
                image: 'https://vuejs.org/images/logo.png',
                difficulty: 2
            },
        ]
    })
}
</script>

<style scoped>

</style>
