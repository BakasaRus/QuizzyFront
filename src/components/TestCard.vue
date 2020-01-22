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
            <p class="subtitle is-6" v-if="test.info !== null">
                {{ test.info.score | pluralPoints }}
            </p>
            <p class="subtitle is-6" v-else>
                Тест не пройден
            </p>
        </div>
        <div class="card-footer">
            <router-link :to="{ name: 'attempt', params: { id: test.id } }"
                         class="card-footer-item" v-if="test.info === null">
                Пройти
            </router-link>
            <router-link :to="{ name: 'protocol', params: { id: test.id } }"
                         class="card-footer-item" v-else>
                Протокол
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
    props: ['test'],
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