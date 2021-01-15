<template>
  <v-app>
    <navigation />
    <v-main >
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'Layout',
  components: {
    Navigation
  },
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'overflow-y:auto')
  },
}
</script>
