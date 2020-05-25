<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          class="white--text"
          rounded
          large
          elevation="1"
          outlined
          v-on="on"
        >Cadastrar no Hercules</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>
            <span class="font-weight-bold headline white--text">Hercules</span>
            <span>&nbsp; | Esportes</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Fechar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- Title -->
        <div class="mx-12 mt-5">
          <div class="row">
            <div class="headline">Criar uma nova conta</div>
          </div>
          <div class="row">
            <div
              class="text-justify mt-4"
            >Crie uma conta Hercules agora mesmo e tenha o total controle de sua escola esportiva. Já possui conta? Faça a login aqui.</div>
          </div>
        </div>

        <!-- Body -->
        <div class="row">
          <div class="col-12 col-md-4 pa-12">
            <div class="headline">Registrar com</div>
            <div class="body-2">Entre com suas redes sociais. É fácil e rápido.</div>
            <div class="row">
              <div class="col col-md-10">
                <v-btn dark tile outlined block style="background-color: #3b5998;">
                  <v-icon left>fab fa-facebook-f</v-icon>
                  <span class="text-none">Registrar com Facebook</span>
                </v-btn>
              </div>
              <div class="col col-md-10 mt-n2">
                <v-btn dark tile outlined block style="background-color: #d34836;">
                  <v-icon left>fab fa-google-plus-g</v-icon>
                  <span class="text-none">Registrar com Google</span>
                </v-btn>
              </div>
            </div>
          </div>
          <!-- Form -->
          <div class="col-12 col-md-8 pa-12">
            <div class="headline">Registrar com um E-mail</div>
            <div class="body-2">Se não possui uma rede social use seu E-mail.</div>

            <!-- Form body -->
            <v-form v-model="isFormValid" lazy-validation ref="form">
              <div>
                <div class="row">
                  <div class="col-12 col-md-8 mb-n6">
                    <v-text-field
                      outlined
                      label="Nome Completo*"
                      v-model="username"
                      :rules="usernameRules"
                    ></v-text-field>
                  </div>
                  <div class="col-12 col-md-4">
                    <v-text-field
                      outlined
                      label="Número de Celular"
                      v-model="phone"
                      v-mask="'(##) #####-####'"
                    ></v-text-field>
                  </div>
                </div>

                <div class="row">
                  <div class="col mt-n6">
                    <v-text-field outlined label="E-mail*" v-model="email" :rules="emailRules"></v-text-field>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-8 mt-n6">
                    <v-text-field
                      outlined
                      label="Senha*"
                      v-model="password"
                      :rules="passwordRules"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-8 mt-n6">
                    <v-text-field
                      outlined
                      label="Confirmar senha*"
                      :rules="confirmPasswordRules"
                      v-model="confirmPassword"
                      type="password"
                    ></v-text-field>
                  </div>
                </div>
                <div class="body-2 text-justify">
                  Confirmando o envio do presente formulário você concorda com os
                  <span
                    class="font-weight-bold"
                  >termos de condições</span> e as
                  <span class="font-weight-bold">políticas de privacidade</span>.
                </div>
                <div class="row mx-1 mt-5">
                  <v-btn
                    class="primary hidden-md-and-up"
                    block
                    @click="signupHandler"
                    :disabled="!isFormValid"
                  >Cadastrar</v-btn>
                  <v-btn
                    class="primary hidden-sm-and-down"
                    @click="signupHandler"
                    :disabled="!isFormValid"
                  >Cadastrar</v-btn>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    socialMediaBtns: [
      {
        title: "Registrar com Facebook",
        icon: "",
        link: "",
        color: "green"
      },
      { title: "Registrar com Google", icon: "", link: "", color: "" }
    ],
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    usernameRules: [username => !!username || "Nome Completo é obrigatório"],
    emailRules: [email => !!email || "E-mail é obrigatório"],
    passwordRules: [
      password => !!password || "Senha é obrigatória",
      password => password.length > 2 || "Senha deve ter no mínimo 3 caracteres"
    ],
    confirmPasswordRules: [
      confirmPassword => !!confirmPassword || "Senha é obrigatória",
      confirmPassword =>
        confirmPassword.length > 2 || "Senha deve ter no mínimo 3 caracteres"
    ],
    showPassword: false,
    isFormValid: true
  }),
  methods: {
    ...mapActions(["signup"]),
    signupHandler() {
      if (this.$refs.form.validate()) {
        this.signup({
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          phone: this.phone
        });
        this.dialog = false;
      }
    }
  }
};
</script>

<style>
</style>