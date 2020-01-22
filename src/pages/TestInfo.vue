<template>
    <div>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <p class="title is-3">
                        {{ test.title }}
                        <small class="has-text-white-ter">
                            #{{ test.id }}
                        </small>
                    </p>
                    <p class="subtitle is-5">{{ test.description }}</p>
                    <p class="subtitle is-5">
                        Результат: {{ test.info.score | pluralPoints }}
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <p class="title is-4">
                    Протокол
                </p>
                <b-table :data="test.questions">
                    <template slot-scope="props">
                        <b-table-column field="title" label="Вопрос">
                            {{ props.row.title }}
                        </b-table-column>

                        <b-table-column field="points" label="Баллы">
                            {{ props.row.points }}
                        </b-table-column>

                        <b-table-column field="info.answer"
                                        label="Ваш ответ"
                                        v-html="props.row.answers.find(answer => answer.key === props.row.info.answer).value"/>

                        <b-table-column field="info.is_correct" label="Верный">
                            <b-icon icon="check"
                                    type="is-success"
                                    v-if="props.row.info.is_correct"/>
                            <b-icon icon="times"
                                    type="is-danger"
                                    v-else/>
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
        test: { }
    }),
    created() {
        this.axios.get(`/api/tests/${this.$route.params.id}`)
            .then(response => this.test = response.data);
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