<template>
  <div class="d-flex flex-wrap justify-center mt-16 pt-16">
    <LetterPairing
      v-for="(char, index) in encryptedQuote.split('')"
      :key="index"
      :char="char"
      :index="index"
    />
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
