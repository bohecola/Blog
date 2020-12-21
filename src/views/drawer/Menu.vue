<template>
  <div>
    <!-- 按钮组 -->
    <v-list dense rounded>
      <v-list-item-group v-model="item">
        <v-list-item v-for="(item, i) in items" :key="i" @click="itemClick(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <!-- 切换开关 -->
      <v-list-item-group>
      <v-list-item inactive :ripple="false" v-model="$vuetify.theme.dark" class="theme-item">
        <v-list-item-icon>
          <v-icon v-if="$vuetify.theme.dark" v-text="lightIcon"></v-icon>
          <v-icon v-else v-text="darkIcon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-if="$vuetify.theme.dark">夜间模式</v-list-item-title>
          <v-list-item-title v-else>日间模式</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import {mdiFormatListBulleted, mdiAlbum, mdiPalette, mdiApps, mdiBrightness4, mdiBrightness7} from '@mdi/js'

export default {
  name: 'Menu',
    data() {
      return {
        item: 0,
        lightIcon: mdiBrightness4,
        darkIcon: mdiBrightness7,
        items: [
          { text: '目录', icon: mdiFormatListBulleted, path: '/' },
          { text: '专辑', icon: mdiAlbum, path: '/album' },
          { text: '娱乐', icon: mdiPalette, path: '/game' },
          { text: '工具', icon: mdiApps, path: '/tool' },
        ],
      }
    },
    watch:{
      '$route':function(to){
        switch(to.path){
          case '/':
          this.item=0;
          break;
          case '/album':
          this.item=1;
          break;
          case '/game':
          this.item=2;
          break;
          case '/tool':
          this.item=3;
          break;
        }
      },
    },
    created() {
      switch(this.$route.path){
        case '/':
        this.item=0;
        break;
        case '/album':
        this.item=1;
        break;
        case '/game':
        this.item=2;
        break;
        case '/tool':
        this.item=3;
        break;
      }
    },
    methods: {
      itemClick(item) {
        this.$router.push(item.path)
      },
    }  
}
</script>