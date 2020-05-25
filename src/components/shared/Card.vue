<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <p class="headline text--secondary text-center font-weight-bold">{{ info.title }}</p>
      <v-divider></v-divider>

      <div class="display-1 font-weight-bold text-center mt-5 text--secondary">{{ info.quantity }}</div>
      <div v-if="info.details.increase" class="body-1 font-weight-bold">
        <v-icon class="mt-2 mr-2 success--text">fas fa-sort-up</v-icon>Um aumento de
        <span>{{ info.details.percentage }}%</span>
      </div>

      <div v-else class="text--secondary body-1 font-weight-bold">
        <v-icon class="mt-n3 mr-2 error--text">fas fa-sort-down</v-icon>Uma queda de
        <span>{{ info.details.percentage }}%</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data: () => ({})
};
</script>

<style>
</style>
