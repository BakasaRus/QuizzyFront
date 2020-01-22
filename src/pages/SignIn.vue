<template>
    <section class="hero is-info is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4-desktop">
                        <div class="box">
                            <p class="title is-4 has-text-black has-text-centered">
                                Вход в систему
                            </p>

                            <form>
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

                                <b-button type="is-info"
                                          size="is-medium"
                                          expanded
                                          @click="login">
                                    <strong>Войти</strong>
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
import { setters } from "@/store";

export default {
    name: "SignIn",
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        login() {
            const credentials = {
                email: this.email,
                password: this.password
            };
            this.axios.get('/airlock/csrf-cookie')
                .then(() => this.axios.post('/login', credentials)
                    .then(response => {
                        setters.setUser(response.data);
                        this.$router.push({ name: 'tests' })
                    })
                );
        }
    }
}
</script>

<style scoped>

</style>