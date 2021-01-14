<template>
  <div class="d-flex flex-wrap justify-center mt-16 pt-16">
    <Word
      v-for="(word, index) in encryptedQuote.split(' ')"
      :key="index"
      :word="word"
      :word-index="index"
    />
    <CorrectAnswer v-show="isAnswerCorrect" />
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unused-vars */
import { mapState } from 'vuex';

export default {
  data() {
    return {
      isAnswerCorrect: false,
    };
  },
  computed: {
    ...mapState(['encryptedQuote']),
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setIsAnswerCorrect') {
        this.isAnswerCorrect = state.isAnswerCorrect;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>
