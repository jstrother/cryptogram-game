<template>
  <div class="d-flex flex-wrap justify-center mt-16 pt-16">
    <Word v-for="(word, index) in encryptedQuote.split(' ')" :key="index" :word="word" />
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
};
</script>
