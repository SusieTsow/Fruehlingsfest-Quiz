<template>
  <div class="home__container">
    <div class="home__img">
      <img
        class="home__img" 
        :src="require('@/assets/cover.png')" 
        alt="Chinesisches Neujahrsbild mit 'Fu' (Glück), Goldbarren und dem Hinweis auf das Jahr der Schlange (2025)">
    </div>
    <div class="home__content">
      <h1 class="home__title">Frühlingsfest Quiz</h1>
      <p class="home__description">
      Das chinesische Frühlingsfest ist viel mehr als nur ein Neujahrsfest! Bist du bereit, dein Wissen zu testen? Hier kommen 12 spannende Fragen: mal schauen, wie gut du dich auskennst!
      </p>
      <BaseButton class="start__btn" @click="startQuiz">Loslegen</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: 'HomePage',
  components: {
      BaseButton
  },
  methods: {
      startQuiz() {
          this.$router.push({ name: 'QuizPage' });
      },
  },
};
</script>
<style>
.home__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 8rem;
  gap: 4rem;
}
.home__img {
  flex: 1;
}
.home__content {
  display: flex;
  flex-direction: column;
  justify-self: start;
}
.home__title {
  font-size: clamp(2rem, 4.5vw, 6rem);
  margin-bottom: 1rem;
  text-align: start;
}
.home__description {
  font-size: 1.25rem;
  margin-bottom: 4rem;
  text-align: start;
}
.start__btn {
  align-self: start;
}

@media screen and (max-width: 768px) {
  .home__container {
    flex-direction: column;
    padding: 3rem;
    height: auto;
  }
  .home__content {
    padding-inline-end: 0;
    justify-self: center;
  }
  .home__img {
    width: 75%;
    height: auto;
    object-fit: cover;
  }
  .home__title {
    font-size: 3rem;
    text-align: center;
  }
  .home__description {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .start__btn {
    align-self: center;
  }
}

@media screen and (max-width: 480px) {
  .home__container {
    padding: 1rem;
    gap: 0.5rem;
  }
  .home__img {
    width: 90%;
    height: auto;
    object-fit: cover;
  }
  .home__content {
    justify-self: center;
  }
  .home__title {
    font-size: 1.5rem;
  }
  .home__description {
    font-size: 1rem;
  }
  .start__btn {
    font-size: 1.25rem;
  }
  
}
</style>