<template>
  <div style="diplay: absolute;">
    <v-alert type="error" dismissible transition="scale-transition">{{ error.message }}</v-alert>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object
    }
  },

  data: () => ({})
};
</script>