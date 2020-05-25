<template>
  <v-app>
    <div class="row justify-center">
      <v-icon size="200">fas fa-cogs</v-icon>
    </div>

    <!-- For mobile -->
    <div class="row hidden-md-and-up">
      <div class="col-1">
        <v-icon class="warning--text justify-end">fas fa-exclamation-triangle</v-icon>
      </div>
      <div
        class="col-11 text-center headline font-weight-bold secondary--text"
      >Estaremos juntos em breve. Página em construção...</div>
    </div>

    <!-- For desktop  -->
    <div
      class="row hidden-sm-and-down mt-n12 justify-center display-2 secondary--text font-weight-thin"
    >Página em construção...</div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>