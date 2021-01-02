<template>
  <v-text-field v-model="answerLetter" v-uppercase maxlength="1"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      answerLetter: '',
    };
  },
};
</script>
