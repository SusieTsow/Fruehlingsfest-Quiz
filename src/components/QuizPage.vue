<template>
    <div class="quiz__container">
        <h1 class="quiz__title">Frühlingsfest Quiz</h1>
        <div class="status__container">
            <div class="quiz__score__container">
                <p class="quiz__score__key">Korrekt: <span class="quiz__score__value">{{ correctAnswers }}</span></p>
                <p class="quiz__score__key">Falsch: <span class="quiz__score__value">{{ incorrectAnswers }}</span></p>
            </div>

            <CountdownTimer 
                :duration="300"
                @timer-end="handleTimeUp"
                ref="timer"
            />
        </div>
        
        <BlockResult
            v-if="showBlockResult"
            :isCorrect="currentAnswerCorrect"
            :correctAnswer="currentQuestionData.correctAnswer"
            :options="currentQuestionData.options"
            @next="goToNextQuestion"
        />
        <div v-else>
            <div class="question__container">
                <p class="question__title">{{ currentQuestionData.question }}</p>
                <div class="options__container">
                    <BaseOption
                        v-for="(option, key) in currentQuestionData.options"
                        :key="`${currentQuestion}-${key}`"
                        :label="key + '. ' + option"
                        :value="key"
                        :isSelected="selectedOptions.includes(key)"
                        @select="toggleOption"
                    />
                </div>
            </div>
            <div class="confirm__btn">
                <BaseButton 
                    :disabled="!canConfirm" 
                    @click="confirmAnswer"
                    label="Bestätigen"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import BaseOption from './BaseOption.vue';
import CountdownTimer from './CountdownTimer.vue';
import BlockResult from './BlockResult.vue';
import questions from '@/assets/quiz.json';

export default ({
    name: 'QuizPage',
    components: {
        BaseButton,
        BaseOption,
        CountdownTimer,
        BlockResult,
    },
    data() {
        return {
            questions,

            currentQuestion: 0,
            currentQuestionIndex: 0,

            correctAnswers: 0,
            incorrectAnswers: 0, 
            
            selectedOptions: [],
            totalQuestions: 12,

            showBlockResult: false,
            currentAnswerCorrect: false,
        };
    },
    computed: {
        currentQuestionData() {
            return this.questions[this.currentQuestion]; 
        },
        canConfirm() {
            // Make sure at least one option is selected
            return this.selectedOptions.length > 0;
        },
    },
    methods: {
        handleTimeUp() {
            // Calculate unanswered questions
            const remainingQuestions = this.totalQuestions - this.currentQuestionIndex;

            // Add remaining questions to incorrect answers
            this.incorrectAnswers += remainingQuestions;

            alert("Zeit ist um! Nicht beantwortete Fragen werden als falsch gewertet.");

            this.goToResults();
        },
        toggleOption(key) {
            if (this.currentQuestionData.type === 'single') {
                this.selectedOptions = [key];
            } else {
                const index = this.selectedOptions.indexOf(key);
                if (index > -1) {
                    this.selectedOptions.splice(index, 1);
                } else {
                    this.selectedOptions.push(key);
                }
            }
        },
        confirmAnswer() {
            const correctAnswers = this.currentQuestionData.correctAnswer;
            this.currentAnswerCorrect = this.isAnswerCorrect(correctAnswers, this.selectedOptions);

            if (this.currentAnswerCorrect) {
                this.correctAnswers++;
            } else {
                this.incorrectAnswers++;
            }

            this.showBlockResult = true;
        },
        resetOptions() {
            this.selectedOptions = [];
            this.showBlockResult = false;
        },
        goToNextQuestion() {
            this.resetOptions();
            
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.currentQuestionIndex++;
            } else {
                this.goToResults();
            }
        },
        isAnswerCorrect(correctAnswers, userAnswers) {
            
            return (
                userAnswers.length === correctAnswers.length &&
                correctAnswers.every((answer) => userAnswers.includes(answer))
            );
        },
        goToResults() {
            this.$router.push({
                name: 'ResultPage',
                query: {
                    correct: this.correctAnswers,
                    incorrect: this.incorrectAnswers,
                },
            });
        },
    },
    created() {
        this.resetOptions();
    },
});
</script>

<style>
.quiz__container {
    padding: 5rem 15rem;
    font-size: 1.5rem;
    align-items: flex-start;
    text-align: start;
    /* height: 100vh; */
}
.quiz__title {
    font-size: clamp(2rem, 4.5vw, 6rem);
    text-align: center;
    margin-block-end: 2rem;
}
.question__container{
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.question__title {
    font-size: 1.75rem;
    margin-block:1rem;
}
.options__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .25rem;
    margin-bottom: 5rem;
}
.status__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.quiz__score__container {
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;
    gap: 1.5rem;
    padding: 0.25rem .75rem;
    margin-block: 1rem;
    color: #EC4C3E;
    background-color: #FDEDEC;
    border-radius: 10px;
    box-shadow: none;
}
.quiz__score__key{
    background-color: #FDEDEC;
}
.quiz__score__value {
    font-weight: 700;
    background-color: #FDEDEC;
}
.confirm__btn {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 768px) {
    .quiz__score__container {
        font-size: 1.25rem;
    }
    .quiz__container {
        padding: 3rem 5rem;
    }
    .question__title {
        font-size: 1.25rem;
        padding-inline: 1rem;
    }
    .confirm__btn {
        margin-inline: auto;
        left: 0;
        right: 0;
        position:absolute;
        bottom: 5rem;
    }
}

@media screen and (max-width: 480px) {
    .quiz__container {
        padding: 1rem;
    }
    .quiz__title {
        font-size: 2rem;
    }
    .question__container{
        font-size: 1.25rem;
    } 
}
</style>