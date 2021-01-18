<template>
  <div class="d-flex flex-column align-center pt-16">
    <h4>Choose your difficulty!</h4>
    <br />
    <div class="button-row d-flex flex-row justify-space-around">
      <nuxt-link
        v-for="(level, index) in levels"
        :key="index"
        to="game"
        style="text-decoration: none"
      >
        <v-btn @click="chooseLevel(level)">{{ level }}</v-btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      levels: ['easy', 'medium', 'hard'],
    };
  },
  methods: {
    ...mapActions(['selectLevel']),
    chooseLevel(level) {
      if (level !== 'hard') {
        this.selectLevel(level);
      }
    },
  },
};
</script>
