<template>
  <v-container>
    <center>
      <h1 :style="{color: $vuetify.theme.themes[theme].primary}">Space Culture</h1>      
    </center>
    <br>
    <div>
      <center>
          <h2 :style="{color: $vuetify.theme.themes[theme].primary}">James Webb Tracker</h2>
      </center>      
      <hr class="hr1" :style="{color: $vuetify.theme.themes[theme].primary}">
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    computed:{
      theme(){
        return (this.$vuetify.theme.themes.dark) ? 'dark' : 'light'
      }
    },
    data: () => ({
      
    }),
  }
</script>