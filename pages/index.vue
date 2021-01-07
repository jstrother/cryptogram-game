<template>
  <div class="d-flex flex-column align-center ma-sm-auto mt-16 pt-16">
    <h4>Solve the Movie Quotes</h4>
    <br />
    <nuxt-link to="game" style="text-decoration: none">
      <v-btn class="ma-sm-auto mt-16" @click="saveQuote">Click to Begin</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import { encryption } from '@/functions/encryption';

export default {
  async asyncData({ $content }) {
    const quoteList = await $content('quotes').fetch();
    const movieQuotes = quoteList[0].movieQuotes;
    const randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
    const encryptedQuote = encryption(randomQuote.quote);

    return { randomQuote, encryptedQuote };
  },
  methods: {
    saveQuote() {
      this.$store.dispatch('saveQuoteInfo', {
        quote: this.randomQuote.quote,
        movie: this.randomQuote.movie,
        encrypted: this.encryptedQuote,
      });
    },
  },
};
</script>
