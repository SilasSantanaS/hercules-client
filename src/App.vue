<template>
  <v-app>
    <app-drawer :drawer="drawer" v-if="user"></app-drawer>
    <v-app-bar app v-if="user" color="primary" dark>
      <!-- Toolbar just for desktop -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-sm-and-down headline font-weight-bold">Hercules</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Searchbar for moblie and desktop -->
      <v-text-field class="pt-5" label="Faça aqui sua pesquisa" append-icon="fas fa-search"></v-text-field>

      <v-spacer></v-spacer>
      <v-btn icon class="hidden-md-and-up" @click="signout">
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>

      <!-- Horizontal menu for desktop -->
      <v-template class="hidden-sm-and-down">
        <template>
          <v-btn text @click="$router.push('/')">Página Inicial</v-btn>
          <v-btn text @click="$router.push('/turmas')">Turmas</v-btn>
          <v-btn text @click="$router.push('/professores')">Professores</v-btn>
          <v-btn text @click="$router.push('/alunos')">Alunos</v-btn>
        </template>

        <v-btn icon dark v-for="item in items" :key="item.title">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <v-btn icon dark @click="signout">
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </v-template>
    </v-app-bar>

    <v-content>
      <!-- Main pages -->
      <v-container v-if="user">
        <router-view></router-view>
        <v-snackbar v-model="authSnackbar" color="secondary" bottom left>
          <v-icon class="white--text">fas fa-check-circle</v-icon>
          <div class="body-1">Olá, &nbsp; {{ user.username }}</div>
          <v-btn icon @click="authSnackbar = false">
            <v-icon class="error--text">fas fa-times-circle</v-icon>
          </v-btn>
        </v-snackbar>
      </v-container>

      <!-- Login and sinin page -->
      <router-view v-else></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import Drawer from "./components/shared/Drawer";

export default {
  components: {
    appDrawer: Drawer
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "E-mail", icon: "far fa-envelope", link: "" },
      { title: "Alunos", icon: "fas fa-users-cog", link: "" }
    ],
    authSnackbar: true
  }),
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["signout"])
  }
};
</script>
