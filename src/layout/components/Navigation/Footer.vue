<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn 
          v-for="item in social_media"
          :key="item.icon"
          :href="item.href"
          target="_blank" class="mx-4" icon
        >
          <v-icon size="24px"> {{ item.icon }} </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <small>陕ICP备20009050号</small>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
    mdiPolice,
  } from '@mdi/js'
export default {
  name: 'Footer',
  data: () => ({
          icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
        mdiPolice
      },
    social_media: [
      {
        icon: 'mdi-github',
        href: 'https://github.com/bohecola'
      }
    ],
  }),  
}
</script>