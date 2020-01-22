<template>
    <div class="container">
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                         alt="Lightweight UI components for Vue.js based on Bulma">
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                    На главную
                </b-navbar-item>
                <b-navbar-item tag="router-link"
                               :to="{ name: 'tests' }"
                               v-if="authenticated">
                    Тесты
                </b-navbar-item>
                <b-navbar-item tag="router-link"
                               :to="{ name: 'test-add' }"
                               v-if="authenticated">
                    Добавить тест
                </b-navbar-item>
            </template>

            <template slot="end" v-if="authenticated">
                <b-navbar-item tag="span">
                    {{ username }}
                </b-navbar-item>
                <b-navbar-item tag="div">
                    <b-button type="is-light" @click="logout">
                        Выйти
                    </b-button>
                </b-navbar-item>
            </template>

            <template slot="end" v-else>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button tag="router-link"
                                  :to="{ name: 'register' }"
                                  type="is-primary">
                            <strong>Зарегистрироваться</strong>
                        </b-button>
                        <b-button tag="router-link"
                                  :to="{ name: 'sign-in' }"
                                  type="is-light">
                            Войти
                        </b-button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
import { setters, getters } from "@/store";

export default {
    name: "HeaderNav",
    methods: {
        logout() {
            this.axios.post('/logout')
                .then(() => setters.clearUser());
        }
    },
    computed: {
        authenticated() {
            return getters.isLoggedIn();
        },
        username() {
            return getters.name();
        }
    }
}
</script>

<style scoped>

</style>