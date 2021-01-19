<template>
  <div class="d-flex flex-column align-center ma-sm-auto mt-16 pt-16">
    <h4>Crack the Encrypted Movie Quotes</h4>
    <br />
    <v-btn @click="saveQuote">Click to Begin</v-btn>
    <LevelSelect v-if="levelSelect" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      levelSelect: false,
    };
  },
  methods: {
    ...mapActions(['saveQuoteInfo']),
    saveQuote() {
      this.levelSelect = !this.levelSelect;
      this.saveQuoteInfo();
    },
  },
};
</script>
