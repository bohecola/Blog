<template>
  <v-container>
    <v-row justify="space-around" style="margin: 20px 0 0;">
      <v-avatar size="80" color="grey">
        <img class="avatar" :src="userInfo.avatar" :alt="userInfo.name">
      </v-avatar>
    </v-row>
    <v-row justify="space-around" style="margin: 0;">
      <v-subheader style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Helvetica, STKaiti, SimSun, serif; font-size: 18px; letter-spacing: 2px;">{{ userInfo.name }}</v-subheader>
    </v-row>
  </v-container >
</template>

<script>
import { getUserInfo } from '@/api/user' 
export default {
  name: 'Header',
  data: () => ({
    userInfo: {},
  }),
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      let query = { id: 1 }
      getUserInfo(query).then(response => {
        const { data } = response
        this.userInfo = data
      })
    }
  }
}
</script>