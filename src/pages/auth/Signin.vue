<template>
  <v-app>
    <div class="row">
      <!-- LEFT HALF -->
      <div class="col-sm-12 col-md-8">
        <v-toolbar elevation="0">
          <v-toolbar-title>
            <span class="font-weight-bold headline primary--text">Hercules</span>
            <span>&nbsp; | Esportes</span>
          </v-toolbar-title>
        </v-toolbar>
        <v-card elevation="0">
          <v-card-title>
            <v-spacer />

            <!-- DESKTOP TITLE -->
            <div class="hidden-sm-and-down display-2 primary--text mt-5">
              Entre com sua
              <br />
              <span class="font-weight-bold display-4">rede social</span>
            </div>

            <!-- MOBILE TITLE -->
            <div class="hidden-md-and-up display-1 primary--text mt-5">
              Entre com sua
              <br />
              <span class="font-weight-bold display-3">rede social</span>
            </div>
            <v-spacer />
          </v-card-title>

          <!-- SOCIAL MEDIA ITEMS -->
          <v-card-actions class="justify-center">
            <v-btn icon v-for="item in items" :key="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-actions>
          <div class="row overline justify-center mt-2">Ou utilize sua conte de e-mail</div>

          <!-- FORM -->
          <div class="row justify-center">
            <div class="col-10 col-md-6">
              <v-text-field label="E-mail" placeholder="Digite seu e-mail" outlined v-model="email"></v-text-field>
              <v-text-field
                label="Senha"
                placeholder="Digite seu senha"
                outlined
                type="password"
                class="mt-n4"
                v-model="password"
              ></v-text-field>
            </div>
          </div>

          <!-- REMEMBER ME AND FORGOT PASSWORD BTNS -->
          <div class="row justify-center">
            <v-btn text v-for="item in buttons" :key="item.title">
              <span class="caption text-none">{{ item.title }}</span>
            </v-btn>
          </div>
          <div class="row justify-center mt-3 mb-4">
            <v-btn
              class="primary text-none"
              rounded
              large
              elevation="1"
              @click="signin({ email, password })"
            >Entrar no Hercules</v-btn>
          </div>
        </v-card>
      </div>

      <!-- RIGH HALF -->
      <div class="col-sm-12 col-md-4 primary">
        <v-card dark class="primary mt-12" elevation="0">
          <!-- DESKTOP TITLE -->
          <v-card-title
            class="hidden-sm-and-down display-1 font-weight-bold"
            style="margin-top: 180px;"
          >
            <v-spacer />Olá, Diretor!
            <v-spacer />
          </v-card-title>

          <!-- MOBILE TITLE -->
          <v-card-title class="hidden-md-and-up display-1 font-weight-bold">
            <v-spacer />Olá, Diretor!
            <v-spacer />
          </v-card-title>
          <div class="row">
            <v-divider class="white" width="50" style="margin-left: 185px; margin-right: 185px;"></v-divider>
          </div>
          <v-card-text
            class="title"
          >Preencha algumas breves informações sobre você e pronto. Você já pode desfrutar das facilidades do Hercules Sistema Digital de Esportes.</v-card-text>
        </v-card>

        <app-signup></app-signup>
      </div>
    </div>
  </v-app>
</template>

<script>
import Signup from "../../components/auth/Signup";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    appSignup: Signup
  },
  data: () => ({
    items: [
      { icon: "fab fa-facebook", link: "" },
      { icon: "fab fa-linkedin", link: "" },
      { icon: "fab fa-instagram", link: "" }
    ],
    buttons: [
      { title: "Lembre-se de mim", link: "" },
      { title: "Esqueceu sua senha?", link: "" }
    ],
    email: "alessia@gmail.com",
    password: "123"
  }),

  methods: {
    ...mapActions(["signin"])
  },
  computed: {
    ...mapGetters(["user"])
  },
  watch: {
    user(value) {
      if (value) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
</style>