<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="mobile_breakpoint" app>
      <template v-slot:prepend>
        <Header/>
        <v-divider></v-divider>
      </template>
      <Menu/>
      <template v-slot:append>
        <Footer/>
      </template>
    </v-navigation-drawer>

    <v-app-bar v-resize="onResize" :value="bar" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Bohecola's Blog</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- {{ windowSize }} {{bar}} -->
      <v-container>
        <keep-alive exclude="Article">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/views/drawer/Header'
import Menu from '@/views/drawer/Menu'
import Footer from '@/views/drawer/Footer'
export default {
  name: 'App',

  components: {
    Header,
    Menu,
    Footer,
  },

  data: () => ({
    mobile_breakpoint: 960,
    drawer: null ,
    bar: true,
    windowSize: {
      x: 0,
      y: 0,
    },
  }),

  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      // this.bar = this.windowSize.x >= this.mobile_breakpoint ? false : true
    },
  },  
};
</script>
