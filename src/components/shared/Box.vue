<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="warning" class="font-weight-bold">{{ teacher.position }}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ teacher.name }}</v-list-item-title>
        <v-list-item-subtitle>Unidade {{ teacher.location }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>"{{ teacher.text }}"</v-card-text>

    <v-card-actions>
      <v-btn text color="primary">Enviar mensagem</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      required: true
    }
  },
  data: () => {}
};
</script>