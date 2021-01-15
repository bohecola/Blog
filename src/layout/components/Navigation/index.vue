<template>
  <div v-resize="onResize">
    <v-system-bar v-if="!bar" height="2px" app></v-system-bar>
    <v-navigation-drawer 
      v-model="drawer"
      :mobile-breakpoint="mobile_breakpoint"
      app
    >
      <template v-slot:prepend><Header/><v-divider></v-divider></template>

      <Menu/>

      <template v-slot:append><Footer/></template>
    </v-navigation-drawer>

    <v-app-bar v-if="bar" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: #666">Bohecola's Blog</v-toolbar-title>
    </v-app-bar>    
  </div>
</template>

<script>
  import Header from './Header'
  import Menu from './Menu'
  import Footer from './Footer'
  
  export default {
    components: {
      Header,
      Menu,
      Footer,
    },
    data: () => ({
      mobile_breakpoint: 960,
      drawer: null ,
      bar: false,
      windowSize: {
        x: 0,
        y: 0,
      },
    }),
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        this.bar = this.windowSize.x >= this.mobile_breakpoint ? false : true
      },
    }
}
</script>
