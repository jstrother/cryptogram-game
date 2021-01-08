<template>
  <div class="letter-input">
    <AnswerLetter v-if="char.match(/[A-Z]/)" :index="index" />
    <SpotHolder v-else />
    <EncryptedLetter :letter="char" />
  </div>
</template>

<script>
export default {
  props: {
    char: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.letter-input {
  width: 1.5em;
  margin: $spacing-gap;
}
</style>
