<template>
  <v-text-field
    v-model="answerLetter"
    class="answerLetter"
    maxlength="1"
    @keyup="setLetter"
  ></v-text-field>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  props: {
    letterIndex: {
      type: Number,
      required: true,
    },
    wordIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      answerLetter: '',
    };
  },
  computed: {
    ...mapState(['userAnswer']),
  },
  created() {
    if (this.userAnswer.length > 0) {
      this.answerLetter = this.userAnswer[this.wordIndex][this.letterIndex];
    }

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setUserAnswer') {
        this.answerLetter = state.userAnswer[this.wordIndex][this.letterIndex];
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    ...mapMutations(['setUserAnswer', 'setIsAnswerCorrect']),
    setLetter() {
      if (event.keyCode !== 9 || !event.shiftKey || (!event.shiftKey && event.keyCode !== 9)) {
        // this will allow users to tab between answerLetter components without causing errors
        if (this.answerLetter && this.answerLetter.match(/^[a-zA-Z]+$/)) {
          this.answerLetter = this.answerLetter.toUpperCase();
          this.setUserAnswer({
            letter: this.answerLetter,
            wordIndex: this.wordIndex,
            letterIndex: this.letterIndex,
          });
          this.setIsAnswerCorrect();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.answerLetter input {
  text-transform: uppercase;
  text-align: center;
}
</style>
