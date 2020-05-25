<template>
  <v-app class="mx-5">
    <div class="row">
      <!-- header -->
      <div class="col-3 col-md-1">
        <v-btn iconm class="primary">
          <v-icon>fas fa-bell</v-icon>
        </v-btn>
      </div>

      <div class="col-8 col-md-4">
        <div class="title font-weight-bold">Notificações</div>
        <span class="overline">Última notificação às 14:35 horas.</span>
      </div>

      <v-spacer />
      <!-- Buttons only for desktop -->
      <div class="col hidden-sm-and-down">
        <v-btn class="ml-2 primary">
          <v-icon left>fas fa-chart-line</v-icon>
          <span>Gráficos</span>
        </v-btn>
        <v-btn class="mx-2 primary--text" outlined>
          <v-icon left>fas fa-user-clock</v-icon>
          <span>Alertas</span>
        </v-btn>
      </div>
    </div>

    <!-- Horizontal banner -->
    <div class="row">
      <div class="col">
        <v-card class min-height="150">
          <div class="row">
            <div class="col-2 col-md-1 headline font-weight-bold pa-8">
              <v-icon large class="primary--text mr-2">fas fa-calendar-times</v-icon>
            </div>
            <div
              class="col body-1 font-weight-thin hidden-md-and-up"
            >Confira os próximos eventos agendados</div>
            <div
              class="col headline font-weight-thin hidden-sm-and-down"
            >Confira os próximos eventos agendados</div>
          </div>
          <v-divider></v-divider>
        </v-card>
      </div>
    </div>

    <!-- Horizontal boxes -->
    <div class="row justify-center">
      <div class="col-12 col-md-3" v-for="info in infos" :key="info.title">
        <app-card :info="info"></app-card>
      </div>
    </div>

    <div class="row headline my-4 mx-1 font-weight-thin">
      <v-icon class="mr-2 yellow--text darken-4 hidden-sm-and-down">fas fa-medal</v-icon>
      <span>Professores mais avaliados do mês</span>
    </div>
    <v-divider></v-divider>
    <!-- 3 boxes -->
    <div class="row justify-center mt-4">
      <div class="col-12 col-md-4" v-for="teacher in teachers" :key="teacher.title">
        <app-box :teacher="teacher"></app-box>
      </div>
    </div>
  </v-app>
</template>

<script>
import Card from "../components/shared/Card";
import Box from "../components/shared/Box";

export default {
  components: {
    appCard: Card,
    appBox: Box
  },
  data: () => ({
    infos: [
      {
        title: "Campeonatos ",
        quantity: 15,
        details: { increase: false, percentage: 37 }
      },
      {
        title: "Turmas",
        quantity: 24,
        details: { increase: true, percentage: 13 }
      },
      {
        title: "Alunos",
        quantity: 97,
        details: { increase: true, percentage: 56 }
      },
      {
        title: "Professores",
        quantity: 11,
        details: { increase: true, percentage: 2 }
      }
    ],
    teachers: [
      {
        name: "Daniel Gomes",
        location: "Campo Grande",
        position: 1,
        text: "Estou feliz com o resultado dos meus alunos todos são incríveis."
      },
      {
        name: "Gustavo Telles",
        location: "Niterói",
        position: 2,
        text: "É uma honra ler eleito um dos melhores professores do mês."
      },
      {
        name: "Lucas Brito",
        location: "Botafogo",
        position: 3,
        text:
          "Amo minha profissão e meus alunos.. Estou muito entusiasmado para a próxima."
      }
    ]
  })
};
</script>
