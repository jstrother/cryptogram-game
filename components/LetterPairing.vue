<template>
  <div>
    <AnswerLetter />
    <hr />
    <EncryptedLetter />
  </div>
</template>

<script>
export default {
  props: {
    regularLetter: {
      type: String,
      required: true,
    },
    encryptedLetter: {
      type: String,
      required: true,
    },
  },
};
</script>
