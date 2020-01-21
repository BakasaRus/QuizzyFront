<template>
    <div class="card">
        <div class="card-content">
            <p class="title is-4 has-margin-bottom-30">
                {{ test.title }}
                <small class="has-text-grey-light">
                    #{{ test.id }}
                </small>
            </p>
            <p class="subtitle is-6">{{ test.description }}</p>
        </div>
        <div class="card-footer">
            <router-link :to="{ name: 'test-info', params: { id: test.id } }"
                         class="card-footer-item">
                Подробнее
            </router-link>
            <router-link :to="{ name: 'test-stats', params: { id: test.id } }"
                         class="card-footer-item">
                Общая статистика
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CourseCard",
    props: ['test']
}
</script>

<style scoped>

</style>