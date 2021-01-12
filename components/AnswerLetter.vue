<template>
  <v-text-field
    v-model="answerLetter"
    class="answerLetter"
    maxlength="1"
    :index="index"
    @keyup="uppercase"
  ></v-text-field>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  props: {
    index: {
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
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setUserAnswer') {
        this.answerLetter = state.userAnswer[this.index];
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    ...mapMutations(['setUserAnswer']),
    uppercase() {
      this.answerLetter = this.answerLetter.toUpperCase();
      this.setUserAnswer({
        letter: this.answerLetter.toUpperCase(),
        index: this.index,
      });
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
