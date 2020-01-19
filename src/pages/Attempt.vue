<template>
    <div>
        <section :class="['hero', getHeroClass()]">
            <div class="hero-body">
                <div class="container">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img :alt="attempt.test.title" :src="attempt.test.image"
                                     class="is-rounded has-background-white">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p class="title is-3">
                                    {{ attempt.test.title }}
                                    <small class="has-text-white-ter">
                                        #{{ attempt.test.id }}
                                    </small>
                                    <br>
                                    Попытка #{{ attempt.id }}
                                </p>
                                <p class="subtitle is-5">{{ attempt.test.description }}</p>
                                <p>{{ attempt.test.difficulty | readableDifficulty }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">
                                <strong>Попытка начата {{ moment(attempt.created_at).calendar(null, { sameElse: 'LLL' }).toLowerCase() }}</strong>
                            </p>
                        </div>
                    </div>

                    <div class="level-right">
                        <div class="buttons">
                            <b-button v-if="!attempt.finished_at"
                                      type="is-primary"
                                      @click="attempt.finished_at = Date.now()">
                                <strong>Завершить</strong>
                            </b-button>
                            <b-button tag="router-link"
                                      :to="{ name: 'test-info', params: { id: attempt.test.id } }"
                                      type="is-secondary">
                                Вернуться
                            </b-button>
                        </div>
                    </div>
                </nav>
                <div class="tile is-ancestor is-vertical">
                    <div :key="question.id" class="tile is-parent is-12" v-for="(question, i) in attempt.questions">
                        <div class="tile is-child box">
                            <p class="title is-5 is-bold">
                                {{ i + 1 }}. {{ question.title }}
                                <small class="has-text-grey">{{ question.points | pluralPoints }}</small>
                            </p>
                            <b-field :key="key"
                                     v-for="(choice, key) in question.answers">
                                <b-radio :disabled="attempt.finished_at"
                                         :native-value="key"
                                         :type="getRadioClass(question, key)"
                                         v-model="question.answer">
                                    <span v-html="choice"/>
                                </b-radio>
                            </b-field>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TestFilters from "@/mixins/TestFilters";

export default {
    name: "Attempt",
    mixins: [TestFilters],
    data: () => ({
        attempt: {
            id: 1,
            created_at: Date.now() - 80 * 60 * 1000,
            finished_at: null,
            points: 12,
            is_accepted: false,
            test: {
                id: 1,
                title: 'Контроллеры в Laravel',
                description: 'Данный тест позволит Вам оценить уровень знаний о контроллерах в Laravel.',
                max_attempts: 5,
                author: {
                    id: 1,
                    full_name: 'Николай Андреев'
                },
                image: 'https://laravel.com/img/logomark.min.svg',
                difficulty: 3
            },
            questions: [
                {
                    id: 1,
                    title: 'В какой папке хранятся контроллеры?',
                    answers: {
                        0: '<code>app/Controllers</code>',
                        1: '<code>app/Http/Controllers</code>',
                        2: '<code>Controllers</code>',
                    },
                    correct_answer: 1,
                    answer: 1,
                    points: 1
                },

                {
                    id: 2,
                    title: 'Какая команда создаёт новый контроллер?',
                    answers: {
                        0: '<code>php artisan make:controller</code>',
                        1: '<code>php artisan make controller</code>',
                        2: '<code>php artisan create:controller</code>',
                        3: '<code>php artisan create controller</code>',
                    },
                    correct_answer: 0,
                    answer: 2,
                    points: 2
                }
            ]
        }
    }),
    methods: {
        getRadioClass(question, radioAnswer) {
            if (!this.attempt.finished_at) {
                return 'is-primary';
            }
            if (+radioAnswer === question.correct_answer) {
                return 'is-success';
            } else {
                return 'is-danger';
            }
        },
        getHeroClass() {
            if (this.attempt.is_accepted) {
                return 'is-success';
            } else {
                return 'is-primary';
            }
        }
    },
    filters: {
        pluralPoints(value) {
            const titles = ['балл', 'балла', 'баллов'];
            const cases = [2, 0, 1, 1, 1, 2];
            const res = titles[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]];
            return `${value} ${res}`;
        }
    }
}
</script>

<style scoped>

</style>