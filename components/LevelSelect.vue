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
        <v-btn @click="levelSelector(level)">{{ level }}</v-btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      levels: ['easy', 'medium', 'hard'],
    };
  },
  computed: {
    ...mapState(['selectedQuote']),
  },
  methods: {
    ...mapMutations(['setUserAnswer']),
    levelSelector(level) {
      if (level === 'hard') return;

      if (level === 'easy') {
        return difficulty(4, this.selectedQuote);
      }

      if (level === 'medium') {
        return difficulty(6, this.selectedQuote);
      }

      function difficulty(num, quote) {
        const upperCaseQuote = quote.toUpperCase();
        const wordsFromQuote = upperCaseQuote.split(' ');
        const lettersFromQuote = upperCaseQuote.split('').filter((letter) => letter.match(/[A-Z]/));
        const levelNumber = Math.floor(lettersFromQuote.length / num);
        // const letterArray = [];
        console.log('wordsFromQuote:', wordsFromQuote);
        console.log('levelNumber:', levelNumber);
        console.log('lettersFromQuote:', lettersFromQuote);
      }
    },
  },
};
</script>
