<template>
  <v-card class="d-flex flex-column align-center ma-sm-auto pa-16">
    <v-card-title>Correct!</v-card-title>
    <v-card-text class="text">{{ selectedQuote }}</v-card-text>
    <v-card-text class="text">{{ selectedMovie }}</v-card-text>
    <v-spacer></v-spacer>
    <nuxt-link to="/" style="text-decoration: none">
      <v-btn class="ma-sm-auto" @click="gameReset">New Game</v-btn>
    </nuxt-link>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedQuote', 'selectedMovie']),
  },
  methods: {
    ...mapMutations(['resetState']),
    gameReset() {
      this.resetState();
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
}
</style>
