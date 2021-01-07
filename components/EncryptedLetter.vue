<template>
  <div>
    <p>{{ letter }}</p>
  </div>
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

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
