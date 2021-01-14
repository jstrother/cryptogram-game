<template>
  <v-row justify="center">
    <v-dialog persistent>
      <v-card>
        <v-card-title>Correct!</v-card-title>
        <v-card-text>{{ selectedQuote }}</v-card-text>
        <v-card-text>{{ selectedMovie }}</v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedQuote', 'selectedMovie']),
  },
};
</script>
