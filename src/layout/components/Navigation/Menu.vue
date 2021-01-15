<template>
  <!-- 按钮组 -->
  <v-list dense nav> 
    <v-list-item-group >
      <v-list-item 
        v-for="(item, i) in menuList"
        :key="item.path + i"
        :to="`${item.path}`"
      >
        <v-list-item-icon>
          <v-icon v-text="item.meta.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.meta.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',
    data() {
      return {
        item: 0,
        menuList: [],
      }
    },
    created() {
      this.getRoutes()
    },
    methods: {
      getRoutes() {
        this.$router.options.routes.map(route => {
          if(route.hidden === undefined) {
            let child = route.children.filter(item => item.hidden === undefined)
            route.children = child
            this.menuList.push(route)
          }
        })
      }
    }  
}
</script>