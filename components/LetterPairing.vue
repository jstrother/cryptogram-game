<template>
  <div class="letter-input">
    <AnswerLetter
      v-if="letter.match(/[A-Z]/)"
      :letter-index="letterIndex"
      :word-index="wordIndex"
    />
    <SpotHolder v-else />
    <EncryptedLetter :letter="letter" />
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
    },
    letterIndex: {
      type: Number,
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
.letter-input {
  width: 1.5em;
  margin: auto;
}
</style>
