<template>
    <v-app id="inspire">
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
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link
                    to="/" >
                    <v-btn icon>
                        <span>Inicio</span>
                    </v-btn>
            </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="logout">
                <span>Salir</span>

            </v-btn>
        </v-app-bar>
    </v-app>
</template>
<script>
    export default {
        name: "Navbar",
         data: () => ({
                drawer: null,
            })
    }
</script>

<style >
    .v-application--wrap{
        min-height: 0px !important;
    }

</style>

