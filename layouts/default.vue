<template>
  <v-app dark>
    <v-app-bar fixed app class="header">
      <h2>Cryptograms</h2>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app class="footer">
      <v-spacer></v-spacer>
      <span>A Jim Strother Creation</span>
      <v-spacer></v-spacer>
      <v-btn v-for="item in contact" :key="item.index" icon>
        <a :href="item.link" target="_blank" class="footer-link">
          <v-icon class="icon">{{ item.icon }}</v-icon>
        </a>
      </v-btn>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          icon: 'mdi-github',
          link: 'https://github.com/jstrother',
        },
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/Jim_Codes_JS',
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/jimstrother/',
        },
        {
          icon: 'mdi-web',
          link: 'http://www.jimstrother.com',
        },
      ],
    };
  },
  head() {
    const title = 'Home';
    return { title };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

a {
  color: white;
  margin: $spacing-gap;
  text-decoration: none;
}
</style>
