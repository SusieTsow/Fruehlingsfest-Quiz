<template>
    <div class="result__container">
            <p class="result__title">Ergebnis</p>
            <p class="result__description">{{ correctAnswers >= 12 ? guru : correctAnswers >= 6 ? profil : kaempfer }}</p>
            <div class="result__score__container">
                <p class="result__score__key">Korrekt: <span class="result__score__value">{{ correctAnswers }}</span></p>
                <p class="result__score__key">Falsch: <span class="result__score__value">{{ incorrectAnswers }}</span></p>
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

<style>
.result__container {
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
}
.result__score__container {
    display: flex;
    margin-bottom: 2rem;
    padding-inline: 10rem;
    padding-block: 2rem;
    border: none;
    background-color: none;
    gap: 10rem;
    justify-content: center;
    color: #EC4C3E;
    background-color: #FDEDEC;
    border-radius: 10px;
}
.result__score__value {
    font-size: clamp(2rem, 4.5vw, 6rem);
    background-color: #FDEDEC;
}
.result__score__key {
    background-color: #FDEDEC;
}
.result__btn {
    margin-inline: auto;
    left: 0;
    right: 0;
    position:absolute;
    bottom: 5rem;
}

@media screen and (max-width: 768px) {
    .result__container {
        flex-direction: column;
        padding: 2rem;
      
    }
    .result__description {
        margin-bottom: 2rem;
        font-size: 1.25rem;
    }
    .result__score__container {
        padding-inline: 5rem;
        padding-block: 2rem;
        gap: 2rem;
        justify-content: space-between;
    }
    .result__score__value {
        font-size: 5rem;
    }
    .result__btn {
        bottom: 2rem;
    }
}

@media screen and (max-width: 480px) {
    .result__container {
        padding: 2rem;
        height: 100vh;
    }
}
</style>
