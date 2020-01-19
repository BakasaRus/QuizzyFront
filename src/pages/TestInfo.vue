<template>
    <div>
        <section class="hero is-info">
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
                <p class="title is-4">
                    Список попыток
                </p>
                <b-table :data="test.attempts">
                    <template slot-scope="props">
                        <b-table-column field="id" label="ID" width="100" numeric centered>
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column field="created_at" label="Дата начала" centered>
                            {{ moment(props.row.created_at).format('LLL') }}
                        </b-table-column>

                        <b-table-column field="finished_at" label="Дата окончания" centered>
                            {{ moment(props.row.finished_at).format('LLL') }}
                        </b-table-column>

                        <b-table-column field="points" label="Баллы" numeric centered>
                            {{ props.row.points }}
                        </b-table-column>

                        <b-table-column field="is_accepted" label="Засчитана" centered>
                            <b-icon v-if="props.row.is_accepted" icon="check" type="is-success"/>
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
    name: "TestInfo",
    mixins: [TestFilters],
    data: () => ({
        test: {
            id: 1,
            title: 'Контроллеры в Laravel',
            description: 'Данный тест позволит Вам оценить уровень знаний о контроллерах в Laravel.',
            attempts: [
                {
                    id: 1,
                    created_at: Date.now() - 80 * 60 * 1000,
                    finished_at: Date.now() - 55 * 60 * 1000,
                    points: 12,
                    is_accepted: false,
                },
                {
                    id: 4,
                    created_at: Date.now() - 45 * 60 * 1000,
                    finished_at: Date.now(),
                    points: 15,
                    is_accepted: true,
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