export default {
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