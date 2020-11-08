<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            app
            >
               <v-img :aspect-ratio="16/9" src="@/assets/logo.png">
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                    <!--<v-col>
                        <div class="subheading">Jonathan Lee</div>
                        <div class="body-1">heyfromjonathan@gmail.com</div>
                    </v-col>-->
                </v-row>
            </v-img>

        </v-navigation-drawer>
    <v-app-bar
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

      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
<style >
    .v-application--wrap{
        min-height: 0px !important;
    }

</style>
