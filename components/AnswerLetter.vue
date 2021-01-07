<template>
  <v-text-field
    v-model="answerLetter"
    class="answerLetter"
    maxlength="1"
    @keyup="uppercase"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      answerLetter: '',
    };
  },
  methods: {
    uppercase() {
      this.answerLetter = this.answerLetter.toUpperCase();
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
