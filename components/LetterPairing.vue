<template>
  <div class="letter-input">
    <AnswerLetter v-if="char.match(/[A-Z]/)" />
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
  },
};
</script>

<style lang="scss" scoped>
.letter-input {
  width: 1.5em;
  // border: 1px solid white;
  margin: $spacing-gap;
}
</style>
