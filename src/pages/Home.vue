<template>
    <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <p class="title">
                            Простой интерфейс.
                            <br>
                            Множество возможностей.
                        </p>
                        <b-button size="is-large"
                                  type="is-primary"
                                  inverted
                                  outlined tag="router-link"
                                  :to="{ name: 'register' }">
                            <strong>Попробовать</strong>
                        </b-button>
                    </div>
                    <div class="column">
                        <p class="subtitle">
                            Вот тут будут классные скрины системы, но позже
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>

</style>
