import { defaultClient as apolloClient } from "../../../main";
import { SIGNUP, SIGNIN, GET_CURRENT_USER } from "../../queries";
import router from "../../../router/index";

export const signup = async ({ commit }, payload) => {
  apolloClient
    .mutate({
      mutation: SIGNUP,
      variables: payload,
    })
    .then(({ data }) => {
      commit("SIGNUP_USER", data.signup.token);
      console.log(data);
    })
    .catch((err) => console.log(err));
};

export const signin = ({ commit }, payload) => {
  localStorage.setItem("token", "");

  apolloClient
    .mutate({
      mutation: SIGNIN,
      variables: payload,
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.signin.token);

      router.go();
      commit("teste", data.signin);
    })
    .catch((err) => console.log(err));
};

export const getCurrentUser = ({ commit }) => {
  commit("SET_LOADING", true);

  apolloClient
    .query({
      query: GET_CURRENT_USER,
    })
    .then(({ data }) => {
      commit("SET_LOADING", false);
      commit("SET_USER", data.getCurrentUser);

      console.log(data.getCurrentUser);
    })
    .catch((err) => {
      commit("SET_LOADING", false);
      console.log(err);
    });
};

export const signout = async ({ commit }) => {
  commit("CLEAR_USER");
  localStorage.setItem("token", "");

  await apolloClient.resetStore();
  router.push("/login");
};
