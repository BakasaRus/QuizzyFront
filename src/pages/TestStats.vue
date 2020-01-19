<template>
    <div>
        <section class="hero is-danger">
            <div class="hero-body">
                <div class="container">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img :src="test.image" class="is-rounded has-background-white" :alt="test.title">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p class="title is-3">
                                    {{ test.title }}
                                    <small class="has-text-white-ter">
                                        #{{ test.id }}
                                    </small>
                                </p>
                                <p class="subtitle is-5">{{ test.description }}</p>
                                <p>{{ test.difficulty | readableDifficulty }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <p class="title is-3">Статистика ответов</p>
                <div class="columns">
                    <div class="column is-4" v-for="question in test.questions" :key="question.id">
                        <div class="box">
                            <p class="title is-5 has-text-centered">
                                {{ question.title }}
                            </p>
                            <b-table :data="question.answers">
                                <template slot-scope="props">
                                    <b-table-column field="value" label="Вариант ответа" v-html="props.row.value"/>

                                    <b-table-column field="count" label="Количество" numeric>
                                        {{ props.row.count }}
                                    </b-table-column>
                                </template>
                            </b-table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <p class="title is-3">Попытки</p>
                <b-table :data="test.attempts">
                    <template slot-scope="props">
                        <b-table-column field="id" label="ID" width="100" numeric centered>
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column field="user.name" label="Пользователь">
                            {{ props.row.user.name }}
                        </b-table-column>

                        <b-table-column field="points" label="Баллы" numeric centered>
                            {{ props.row.points }}
                        </b-table-column>

                        <b-table-column>
                            <b-button tag="router-link" :to="{ name: 'attempt', params: { id: props.row.id } }" type="is-primary" size="is-small">Просмотреть</b-button>
                        </b-table-column>
                    </template>
                </b-table>
            </div>
        </section>
    </div>
</template>

<script>
import TestFilters from "@/mixins/TestFilters";

export default {
    name: "TestStats",
    mixins: [ TestFilters ],
    data: () => ({
        test: {
            id: 1,
            title: 'Контроллеры в Laravel',
            description: 'Данный тест позволит Вам оценить уровень знаний о контроллерах в Laravel.',
            attempts: [
                {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Василий Комаров'
                    },
                    points: 12,
                },
                {
                    id: 7,
                    user: {
                        id: 1,
                        name: 'Николай Андреев'
                    },
                    points: 15,
                }
            ],
            questions: [
                {
                    id: 1,
                    title: 'В какой папке хранятся контроллеры?',
                    answers: [
                        {
                            key: 0,
                            value: '<code>app/Controllers</code>',
                            count: Math.round(Math.random() * 10)
                        },
                        {
                            key: 1,
                            value: '<code>app/Http/Controllers</code>',
                            count: Math.round(Math.random() * 10)
                        },
                        {
                            key: 2,
                            value: '<code>Controllers</code>',
                            count: Math.round(Math.random() * 10)
                        },
                    ],
                    correct_answer: 1,
                },

                {
                    id: 2,
                    title: 'Какая команда создаёт новый контроллер?',
                    answers: [
                        {
                            key: 0,
                            value: '<code>php artisan make:controller</code>',
                            count: 3
                        },
                        {
                            key: 1,
                            value: '<code>php artisan make controller</code>',
                            count: 3
                        },
                        {
                            key: 2,
                            value: '<code>php artisan create:controller</code>',
                            count: 3
                        },
                        {
                            key: 3,
                            value: '<code>php artisan create controller</code>',
                            count: 3
                        },
                    ],
                    correct_answer: 0,
                    answer: 2
                }
            ],
            max_attempts: 5,
            author: {
                id: 1,
                full_name: 'Николай Андреев'
            },
            image: 'https://laravel.com/img/logomark.min.svg',
            difficulty: 3
        }
    })
}
</script>

<style scoped>

</style>