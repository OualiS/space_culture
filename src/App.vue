<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
<!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
</v-app-bar> -->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed:{
    theme(){
      return (this.$vuetify.theme.themes.dark) ? 'dark' : 'light'
    }
  },
  created () {
    console.log(this.$vuetify.theme.themes)
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@800&display=swap');

h1,h2{
  font-family: 'Trispace', sans-serif;
}

.hr1{
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(113, 4, 163, 0), rgba(218, 43, 253, 0.75), rgba(0, 0, 0, 0));
    
}
</style>