<template>
    <div 
        class="block__result__container"
        :class="isCorrect ? 'correct' : 'incorrect'"
    >
        <p 
            class="result__title"
            :class="isCorrect ? 'correct' : 'incorrect'"
        >
            <!-- <img 
                class="result__icon"
                :src="isCorrect 
                    ? require('@/assets/correct.svg') 
                    : require('@/assets/false.svg')" 
                :alt="isCorrect 
                    ? 'Richtige Icon' 
                    : 'Falsche Icon'" 
            /> -->
            {{ isCorrect ? '&#x1F618; Richtig!' : '&#x1F92A; Falsch!' }}
        </p>
        <p 
            class="result__description"
            :class="isCorrect ? 'correct' : 'incorrect'"
        >
            {{ isCorrect 
                ? 'Du hast die Frage richtig beantwortet.' 
                : 'Die richtige Antwort ist: ' }}
                <br>
                <span 
                    class="correct__answer" 
                    v-if="!isCorrect"
                    v-html="formatCorrectAnswer"
                /> 
        </p>
        <BaseButton class="next__btn" @click="nextQuestion" label="weiter" />
    </div>
</template>

<script>

import BaseButton from './BaseButton.vue';

export default {
    name: 'BlockResult',
    components: {
        BaseButton
    },
    props: {
        isCorrect: {
            type: Boolean,
            default: true
        },
        correctAnswer: {
            type: Array,
            required: true
        },
        options: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatCorrectAnswer() {
            return this.correctAnswer
                .map(answer => `${answer}: ${this.options[answer]}`)
                .join('<br>');
        }
    },
    methods: {
        nextQuestion() {
            this.$emit('next');
        }
    }
}
</script>

<style scoped>
.block__result__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:50%;    
    margin-inline: auto;
    padding: 1rem;
    text-align: center;
    background-color: #FEF6F5;
    border: #FBDBD8 2px solid;
    border-radius: 10px;
}
.correct {
    color: #2D8548;
    border-color: #C1E7D9;
    background-color: #F0F9F4;
}
.incorrect {
    color: #EC4C3E;
    border-color: #F9C9C5;
    background-color: #FEF6F5;
}
.result__icon {
    width: 4rem;
    height: 4rem;
}
.result__title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
    margin-block: 1rem;
    font-weight: 700;
    padding-inline: 2rem;
    background-color: transparent;
}
.result__description {
    font-size: 1.25rem;
    line-height: 2;
    text-align: start;
    margin-bottom: 2rem;
    padding-inline: 2rem;
    background-color: transparent;
}
.correct__answer {
    font-weight: 700;
    margin-block-start: 5rem;
    background-color: #FEF6F5; 
}
.correct-answer span {
  white-space: pre-line;
}
.next__btn {
    margin-inline: auto;
    left: 0;
    right: 0;
    position:absolute;
    bottom: 5rem;
}
@media screen and (max-width: 768px) {
    .block__result__container {
        width: 100%;
        margin-block-start: 5rem;
    }
    .result__title {
        font-size: 2rem;
    }
    .result__description {
        font-size: 1.25rem;
    }
    .next__btn {
        bottom: 5rem;
    }
}
@media screen and (max-width: 480px) {
    .result__title {
        font-size: 1.5rem;
    }
    .result__description {
        font-size: 1rem;
    }
}
</style>
