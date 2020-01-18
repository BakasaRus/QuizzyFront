<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img :src="test.image" :alt="test.title">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="title is-4">{{ test.title }}</p>
                        <p class="subtitle is-6">Автор: {{ test.author.full_name }}</p>
                        <p>{{ test.difficulty | readableDifficulty }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <router-link to="/" class="card-footer-item">Подробнее</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CourseCard",
    props: ['test'],
    filters: {
        readableDifficulty(value) {
            switch (value) {
                case 1: return 'Низкая сложность';
                case 2: return 'Средняя сложность';
                case 3: return 'Высокая сложность';
                case 4: return 'Адская сложность';
                default: return 'Непонятная сложность';
            }
        }
    }
}
</script>

<style scoped>

</style>