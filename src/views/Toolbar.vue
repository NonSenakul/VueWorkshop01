<template>
      <div>
        <v-app-bar
        app
        color="teal"
        dark
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="..\src\assets\Fingerpoint.png"
            transition="scale-transition"
            width="70"
          />
          <h1>Vue.js workshop:  เเนะนำตัว</h1>            
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
      </v-app-bar>
  
      <v-main>
        <router-view/>
      </v-main>
      </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
    data: () => ({
      //
    }),
  };
  </script>
  