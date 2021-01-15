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
        return difficulty(2, this.selectedQuote);
      }

      if (level === 'medium') {
        return difficulty(3, this.selectedQuote);
      }

      function difficulty(num, quote) {
        const wordsFromQuote = quote.split(' ');
        const quoteLength = quote.split('').length;
        const levelNumber = Math.floor(quoteLength / num);
        const letterArray = [];
        const wordIndexArray = [];
        const letterIndexArray = [];

        while (letterArray.length < levelNumber) {
          wordsFromQuote.forEach((word, wordIndex) => {
            word.split('').forEach((letter, letterIndex) => {
              if (!letterArray.includes(letter)) {
                letterArray.push(letter);
                wordIndexArray.push(wordIndex);
                letterIndexArray.push(letterIndex);
              }
            });
          });
          console.log('letterArray:', letterArray);
          console.log('wordIndexArray:', wordIndexArray);
          console.log('letterIndexArray:', letterIndexArray);
        }
      }
    },
  },
};
</script>
