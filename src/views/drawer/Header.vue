<template>
  <v-container style="padding-top: 30px;" fluid>
    <v-row justify="space-around">
      <v-avatar size="80">
        <img class="avatar" :src="userInfo.avatar" :alt="userInfo.name">
      </v-avatar>
    </v-row>
    <v-row justify="space-around">
      <v-subheader style="font-family: 'Georgia','KaiTi';font-size: 18px;letter-spacing: 2px;">{{ userInfo.name }}</v-subheader>
    </v-row>
  </v-container>
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
      let obj = { id: 1 }
      getUserInfo(obj).then(res => {
        this.userInfo = res
      })
    }
  }
}
</script>