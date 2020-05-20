import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Signin from "../pages/auth/Signin.vue";

//import AuthGuard from "./AuthGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    //beforeEnter: AuthGuard,
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
