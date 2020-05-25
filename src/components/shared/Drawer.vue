<template>
  <v-card>
    <v-navigation-drawer app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.username }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    drawer: {
      type: Boolean,
      default: null
    }
  },
  data: () => ({
    items: [
      { title: "Página Principal", icon: "fas fa-laptop-house", link: "/" },
      { title: "Turmas", icon: "fas fa-user-plus", link: "/turmas" },
      {
        title: "Professores",
        icon: "fas fa-chalkboard-teacher",
        link: "/professores"
      },
      { title: "Alunos", icon: "fas fa-users", link: "alunos" },
      { title: "Campeonatos", icon: "fas fa-trophy" },
      { title: "Pagamentos", icon: "fas fa-credit-card" },
      { title: "Configurações", icon: "fas fa-tools" },
      { title: "+Mais", icon: "fas fa-plus-circle" }
    ]
  }),
  computed: {
    ...mapGetters(["user"])
  }
};
</script>

<style>
</style>