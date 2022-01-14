<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
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