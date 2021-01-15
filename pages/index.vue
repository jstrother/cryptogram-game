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
import { encryption } from '@/functions/encryption';

export default {
  async asyncData({ $content }) {
    const quoteList = await $content('quotes').fetch();
    const quotes = quoteList[0].movieQuotes;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const encryptedQuote = encryption(randomQuote.quote);
    console.log('randomQuote:', randomQuote);

    return { randomQuote, encryptedQuote };
  },
  data() {
    return {
      levelSelect: false,
    };
  },
  methods: {
    ...mapActions(['saveQuoteInfo']),
    saveQuote() {
      this.levelSelect = !this.levelSelect;
      this.saveQuoteInfo({
        quote: this.randomQuote.quote,
        movie: this.randomQuote.movie,
        encrypted: this.encryptedQuote,
      });
    },
  },
};
</script>
