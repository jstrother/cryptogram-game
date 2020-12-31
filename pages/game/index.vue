<template>
  <div>
    <p>{{ randomQuote.quote }}</p>
    <p>{{ encryptedQuote }}</p>
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
