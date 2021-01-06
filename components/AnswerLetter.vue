<template>
  <v-text-field v-model="answerLetter" maxlength="1"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      answerLetter: '',
    };
  },
  watch: {
    answerLetter: () => {
      return this.answerLetter.toUpperCase();
    },
  },
};
</script>
