import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

import { defaultClient as apolloClient } from "../main";

import { SIGNIN, SIGNUP, GET_CURRENT_USER } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    user: false,
    error: null,
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    CLEAR_USER: (state) => {
      state.user = null;
    },
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
    CLEAR_ERROR: (state) => {
      state.error = null;
    },
  },
  actions: {
    signin: ({ commit }, payload) => {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);

      localStorage.setItem("token", "");
      apolloClient
        .mutate({
          mutation: SIGNIN,
          variables: payload,
        })
        .then(({ data }) => {
          commit("SET_LOADING", false);
          localStorage.setItem("token", data.signin.token);
          router.go();
        })
        .catch((err) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", err);
          console.log(err);
        });
    },
    getCurrentUser: ({ commit }) => {
      commit("SET_LOADING", true);
      apolloClient
        .query({
          query: GET_CURRENT_USER,
        })
        .then(({ data }) => {
          commit("SET_LOADING", false);
          commit("SET_USER", data.getCurrentUser);
          router.push("/");
        })
        .catch((err) => {
          commit("SET_LOADING", false);
          console.log(err);
        });
    },
    signup: ({ commit }, payload) => {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);

      apolloClient
        .mutate({
          mutation: SIGNUP,
          variables: payload,
        })
        .then(({ data }) => {
          commit("SET_LOADING", false);
          // localStorage.setItem("token", data.signup.token);
          console.log(data);

          router.go();
        })
        .catch((err) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", err);
          console.log(err);
        });
    },
    signout: async ({ commit }) => {
      commit("CLEAR_USER");
      localStorage.setItem("token", "");

      await apolloClient.resetStore();
      router.push("/login");
    },
  },
  getters: {
    user: (state) => state.user,
    error: (state) => state.error,
    loading: (state) => state.loading,
  },
  modules: {},
});
