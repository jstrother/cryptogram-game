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
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      answerLetter: this.userAnswer[this.index] || '',
    };
  },
  computed: {
    ...mapState(['userAnswer']),
  },
  methods: {
    ...mapMutations(['setUserAnswer']),
    uppercase() {
      this.answerLetter = this.answerLetter.toUpperCase();
      this.setUserAnswer(this.answerLetter.toUpperCase());
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
