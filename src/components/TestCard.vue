<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img :src="test.image" :alt="test.title">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="title is-4">
                            {{ test.title }}
                            <small class="has-text-grey-light">
                                #{{ test.id }}
                            </small>
                        </p>
                        <p class="subtitle is-6">{{ test.description }}</p>
                        <p>{{ test.difficulty | readableDifficulty }}</p>
                    </div>
                </div>
            </div>
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
import TestFilters from "@/mixins/TestFilters";

export default {
    name: "CourseCard",
    mixins: [TestFilters],
    props: ['test']
}
</script>

<style scoped>

</style>