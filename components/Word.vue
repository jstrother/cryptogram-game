<template>
  <div class="word d-flex">
    <LetterPairing v-for="(char, index) in word" :key="index" :char="char" />
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.word {
  border: 1px solid white;
  margin: $spacing-gap;
}
</style>
