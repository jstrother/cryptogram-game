<template>
  <div class="d-flex flex-wrap justify-center mt-16 pt-16">
    <LetterPairing
      v-for="(letter, index) in word.split('')"
      :key="index"
      :letter="letter"
      :letter-index="index"
      :word-index="wordIndex"
    />
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
    wordIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: $spacing-gap * 2;
}
</style>
