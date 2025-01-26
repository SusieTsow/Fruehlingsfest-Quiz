import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import QuizPage from "@/components/QuizPage.vue";
import ResultPage from "@/components/ResultPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/quiz",
    name: "QuizPage",
    component: QuizPage,
  },
  {
    path: "/result",
    name: "ResultPage",
    component: ResultPage,
    props: (route) => ({
      correctAnswers: parseInt(route.query.correct) || 0,
      incorrectAnswers: parseInt(route.query.incorrect) || 0,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
