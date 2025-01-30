<template>
    <div class="result__container">
            <p class="result__title">&#x1F9E8; Ergebnis</p>
            <p class="result__description">{{ correctAnswers >= 12 ? guru : correctAnswers >= 6 ? profil : kaempfer }}</p>
            
            <div class="result__score__container">
                <p class="result__score__block correct">&#x1F618; Korrekt <span class="result__score__value">{{ correctAnswers }}</span></p>
             
                <p class="result__score__block incorrect">&#x1F92A; Falsch <span class="result__score__value">{{ incorrectAnswers }}</span></p>
            
            </div>
            <div class="result__btn">
                <BaseButton @click="restartQuiz">Neustart</BaseButton>
        </div>
    </div>
</template>

<script>

import BaseButton from './BaseButton.vue';
export default {
    name: 'ResultPage',
    components: {
        BaseButton
    },
    props: {
        correctAnswers: {
            type: Number,
            required: true
        },
        incorrectAnswers: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            guru: 'Hut ab! Du bist der chinesische Neujahr-Guru, den wir nie wussten, dass wir brauchen. Jetzt kannst du uns den Weg zum Festmahl zeigen!',
            profil: 'Nicht schlecht, fast wie ein Profi! Ein paar richtige Antworten mehr und du bekommst den Titel "Chinesisch Neujahr-Held des Jahres".',
            kaempfer:'Okay, zu viele Fehler für einen Anfänger, aber hey, du bist der mutige Neujahr-Kämpfer, der sich nicht unterkriegen lässt. Nächstes Mal rockst du das!'
        }
    },
    methods: {
        restartQuiz() {
            this.$router.push({ name: 'QuizPage' });
        }
    }
}
</script>

<style scoped>
.result__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 15rem;
    font-weight: 400;
    font-size: 1.5rem;
    height: 100vh;
}
.result__title {
    font-size: clamp(2rem, 4.5vw, 6rem);
    margin-bottom: 2rem;
    font-weight: 700;
}
.result__description {
    font-size: 1.25rem;
    margin-bottom: 5rem;
    width: 75%;
}
.result__score__container {
    display: flex;
    margin-bottom: 2rem;
    padding-inline: 10rem;
    padding-block: 2rem;
    gap: 25%;
    justify-content: center;
}
.result__btn {
    margin-inline: auto;
    left: 0;
    right: 0;
    position:absolute;
    bottom: 5rem;
}
.correct {
    color: #2D8548;
    border-color: #C1E7D9;
    background-color: #F0F9F4;
    border: #C1E7D9 2px solid;
    border-radius: 10px;
}
.incorrect {
    color: #EC4C3E;
    border-color: #F9C9C5;
    background-color: #FEF6F5;
    border: #FBDBD8 2px solid;
    border-radius: 10px;
}
.result__score__block {
    display: flex;
    flex-direction: column;
    padding-block-start: 1rem;
    width: 15rem;
   
}
.result__score__value {
    font-size: clamp(2rem, 5.5vw, 8rem);
    font-weight: 700;
    background-color: transparent;
}

@media screen and (max-width: 768px) {
    .result__container {
        flex-direction: column;
        padding: 2rem;
        height: 100vh;
    }
    .result__score__container {
        display: flex;
        width: 100%;
        gap: 2rem;
        justify-content: center;
    }
    .result__score__block {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    .result__btn {
        bottom: 2rem;
    }
}
</style>
