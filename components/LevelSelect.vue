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
        difficulty(7, this.selectedQuote).forEach((group) => {
          console.log('group:', group);
          this.setUserAnswer({
            letter: group[0],
            wordIndex: group[1],
            letterIndex: group[2],
          });
        });
      }

      if (level === 'medium') {
        difficulty(10, this.selectedQuote).forEach((group) => {
          this.setUserAnswer({
            letter: group[0],
            wordIndex: group[1],
            letterIndex: group[2],
          });
        });
      }

      function difficulty(num, quote) {
        const mostCommonLetters = ['E', 'A', 'R', 'I', 'O'];
        const upperCaseQuote = quote.toUpperCase();
        const wordsFromQuote = upperCaseQuote.split(' ');
        const lettersFromQuote = upperCaseQuote.split('').filter((letter) => letter.match(/[A-Z]/));
        const levelNumber = Math.floor(lettersFromQuote.length / num);
        const answerArray = [];
        const letterSet = new Set();
        console.log('quote:', upperCaseQuote);
        console.log('levelNumber:', levelNumber);
        while (letterSet.size < levelNumber) {
          const randomLetter =
            lettersFromQuote[Math.floor(Math.random() * lettersFromQuote.length)];

          wordsFromQuote.forEach((word, wordIndex) => {
            word.split('').forEach((letter, letterIndex) => {
              if (
                !mostCommonLetters.includes(letter) &&
                !letterSet.has(letter) &&
                letter === randomLetter
              ) {
                letterSet.add(randomLetter);
                answerArray.push([letter, wordIndex, letterIndex]);
              }
            });
          });
        }
        console.log('answerArray:', answerArray);
        return answerArray;
      }
    },
  },
};
</script>
