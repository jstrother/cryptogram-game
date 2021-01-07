<template>
  <div class="d-flex flex-wrap justify-center mt-16 pt-16">
    <Word v-for="(word, index) in encryptedQuote.split(' ')" :key="index" :word="word" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['encryptedQuote']),
  },
};
</script>
