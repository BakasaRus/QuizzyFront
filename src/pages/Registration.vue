<template>
    <section class="hero is-primary is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4-desktop">
                        <div class="box">
                            <p class="title is-4 has-text-black has-text-centered">
                                Регистрация
                            </p>

                            <form>
                                <b-field label="Имя">
                                    <b-input v-model="name"/>
                                </b-field>

                                <b-field label="Email">
                                    <b-input type="email"
                                             v-model="email"/>
                                </b-field>

                                <b-field label="Пароль">
                                    <b-input type="password"
                                             v-model="password"
                                             password-reveal>
                                    </b-input>
                                </b-field>

                                <b-field label="Подтвердите пароль">
                                    <b-input type="password"
                                             v-model="confirmation"
                                             password-reveal>
                                    </b-input>
                                </b-field>

                                <b-field>
                                    <b-checkbox v-model="agreed">
                                        Я соглашаюсь с правилами сервиса
                                    </b-checkbox>
                                </b-field>

                                <b-button :disabled="!agreed"
                                          type="is-primary"
                                          size="is-medium"
                                          expanded
                                          @click="register">
                                    <strong>Зарегистрироваться</strong>
                                </b-button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Registration",
    data: () => ({
        name: '',
        email: '',
        password: '',
        confirmation: '',
        agreed: false
    }),
    methods: {
        register() {
            const credentials = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmation
            };

            this.axios.get('/airlock/csrf-cookie')
            .then(() => this.axios.post('/register', credentials)
                // eslint-disable-next-line no-console
                .then(response => window.user = response.data));
        }
    }
}
</script>

<style scoped>

</style>