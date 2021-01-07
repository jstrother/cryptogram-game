<template>
  <div class="word d-flex">
    <LetterPairing v-for="(char, index) in word" :key="index" :char="char" :index="index" />
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
  margin: $spacing-gap * 4;
}
</style>
