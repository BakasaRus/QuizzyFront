<template>
    <div class="container">
        <b-navbar spaced>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                         alt="Lightweight UI components for Vue.js based on Bulma">
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/">
                    На главную
                </b-navbar-item>
                <b-navbar-item tag="router-link" to="/">
                    Мои тесты
                </b-navbar-item>
                <b-navbar-item tag="router-link" to="/">
                    Добавить тест
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button tag="router-link"
                                  :to="{ name: 'register' }"
                                  type="is-primary">
                            <strong>Зарегистрироваться</strong>
                        </b-button>
                        <a class="button is-light">
                            Войти
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped>

</style>