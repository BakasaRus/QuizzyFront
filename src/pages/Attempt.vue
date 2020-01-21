<template>
    <div>
        <section :class="['hero', 'is-primary']">
            <div class="hero-body">
                <div class="container">
                    <p class="title is-3">
                        {{ test.title }}
                        <small class="has-text-white-ter">
                            #{{ test.id }}
                        </small>
                    </p>
                    <p class="subtitle is-5">{{ test.description }}</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <nav class="level">
                    <div class="level-left">
                    </div>

                    <div class="level-right">
                        <b-button type="is-primary"
                                  @click="save">
                            <strong>Завершить</strong>
                        </b-button>
                    </div>
                </nav>
                <div class="tile is-ancestor is-vertical">
                    <div :key="question.id" class="tile is-parent is-12" v-for="(question, i) in test.questions">
                        <div class="tile is-child box">
                            <p class="title is-5 is-bold">
                                {{ i + 1 }}. {{ question.title }}
                                <small class="has-text-grey">
                                    {{ question.points | pluralPoints }}
                                </small>
                            </p>
                            <b-field :key="choice.key"
                                     v-for="choice in question.answers">
                                <b-radio :native-value="choice.key"
                                         type="is-primary"
                                         v-model="question.answer">
                                    <span v-html="choice.value"/>
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
export default {
    name: "Attempt",
    data: () => ({
        test: {}
    }),
    created() {
        this.axios.get(`/api/tests/${this.$route.params.id}`)
            .then(response => this.test = response.data);
    },
    methods: {
        save() {
            const answers = this.test.questions.map((value => ({
                id: value.id,
                answer: value.answer
            })));
            this.axios.post(`/api/tests/${ this.$route.params.id }/attempt`, { answers })
                .then(() => this.$router.push({ name: 'home' }));
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