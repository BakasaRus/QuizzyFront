<template>
    <div>
        <section :class="['hero', 'is-success', 'is-bold']">
            <div class="hero-body">
                <div class="container">
                    <div class="media">
                        <p class="title is-3">
                            Новый тест
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="tile is-ancestor is-vertical">
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <p class="title is-5">Основные настройки</p>
                            <b-field horizontal label="Название">
                                <b-input v-model="title"/>
                            </b-field>
                            <b-field horizontal label="Описание">
                                <b-input v-model="description" type="textarea"/>
                            </b-field>
                            <b-field horizontal label="Количество вопросов в попытке">
                                <b-numberinput v-model="attempt_questions" min="1" type="is-light"/>
                            </b-field>
                            <b-field class="file" label="Иконка" horizontal>
                                <b-upload v-model="image">
                                    <b-button icon-left="upload">Загрузить</b-button>
                                </b-upload>
                                <span class="file-name" v-if="image">
                                    {{ image.name }}
                                </span>
                            </b-field>
                            <b-field horizontal label="Сложность">
                                <b-rate v-model="difficulty"
                                        show-text
                                        :max="3"
                                        icon-pack="fas"
                                        :texts="['Низкая', 'Средняя', 'Высокая']">
                                </b-rate>
                            </b-field>
                        </div>
                    </div>
                    <div class="tile is-parent" v-for="(question, i) in questions" :key="i">
                        <div class="tile is-child box">
                            <p class="title is-5">Вопрос {{ i + 1 }}</p>
                            <b-field horizontal
                                     label="Текст вопроса">
                                <b-input v-model="question.title"/>
                            </b-field>
                            <b-field horizontal
                                     label="Варианты ответа">
                                <b-button @click="question.answers.push({ key: '', value: '' })">Добавить вариант</b-button>
                            </b-field>
                            <b-field v-for="(choice, i) in question.answers"
                                     :key="i"
                                     horizontal>
                                <b-radio-button v-model="question.correct_answer"
                                                :native-value="question.answers[i].key"
                                                type="is-success">
                                    <b-icon icon="check"/>
                                    Верный ответ
                                </b-radio-button>
                                <b-input v-model="question.answers[i].key"/>
                                <b-input v-model="question.answers[i].value"/>
                                <b-button @click="question.answers.splice(i, 1)"
                                          icon-left="trash"
                                          type="is-danger">
                                    Удалить
                                </b-button>
                            </b-field>
                        </div>
                    </div>
                </div>
                <div class="level">
                    <div class="level-left"></div>
                    <div class="level-right">
                        <div class="level-item">
                            <b-button type="is-primary" @click="addQuestion">
                                <strong>Добавить вопрос</strong>
                            </b-button>
                        </div>
                        <div class="level-item">
                            <b-button type="is-success">
                                <strong>Сохранить</strong>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "TestAdd",
    data: () => ({
        title: '',
        description: '',
        attempt_questions: 0,
        image: null,
        difficulty: 1,
        questions: [

        ]
    }),
    methods: {
        addQuestion() {
            this.questions.push({
                title: '',
                answers: [
                    {
                        key: '1',
                        value: 'Ответ 1'
                    },
                    {
                        key: '2',
                        value: 'Ответ 2'
                    },
                ],
                correct_answer: 0
            });
        }
    }
}
</script>

<style scoped>

</style>