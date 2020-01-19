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
                                    <b-input v-model="user.name"/>
                                </b-field>

                                <b-field label="Email">
                                    <b-input type="email"
                                             v-model="user.email"/>
                                </b-field>

                                <b-field label="Пароль">
                                    <b-input type="password"
                                             v-model="user.password"
                                             password-reveal>
                                    </b-input>
                                </b-field>

                                <b-field label="Подтвердите пароль">
                                    <b-input type="password"
                                             v-model="user.confirmation"
                                             password-reveal>
                                    </b-input>
                                </b-field>

                                <b-field>
                                    <b-checkbox v-model="user.agreed">
                                        Я соглашаюсь с правилами сервиса
                                    </b-checkbox>
                                </b-field>

                                <b-button :disabled="!user.agreed" type="is-primary" size="is-medium" expanded>
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
        user: {
            name: '',
            email: '',
            password: '',
            confirmation: '',
            agreed: false
        }
    })
}
</script>

<style scoped>

</style>