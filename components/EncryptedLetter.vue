<template>
  <div>{{ letter }}</div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
    },
  },
};
</script>
