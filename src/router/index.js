import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Signin from "../pages/auth/Signin.vue";

import Class from "../pages/Class.vue";
import Teacher from "../pages/Teacher.vue";
import Student from "../pages/Student.vue";

import AuthGuard from "./AuthGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: AuthGuard,
  },
  {
    path: "/turmas",
    name: "Turmas",
    component: Class,
  },
  {
    path: "/professores",
    name: "Professores",
    component: Teacher,
  },
  {
    path: "/alunos",
    name: "Alunos",
    component: Student,
  },

  {
    path: "/login",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
