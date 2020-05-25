import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;

Vue.use(VueTheMask);

Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
  //uri: "http://localhost:4000/graphql/",
  uri: "https://hercules-sports.herokuapp.com/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log("Problema encontrado no GraphQL");
    }
    if (networkError) {
      console.log("Problema encontrado na rede");
    }
  },
});

const apolloProvider = new VueApollo({ defaultClient });

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("getCurrentUser");
  },
}).$mount("#app");
