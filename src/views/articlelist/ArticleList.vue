<template>
  <v-card class="mx-auto">
    <v-list>
      <template v-for="(item, index) in articleList">
        <v-list-item :key="item.index" class="list-item" @click="itemClick(item)">
          <template v-slot:default>
            <v-list-item-content>
              <v-list-item-title class="list-title">{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle class="list-subtitle">{{ item.created_at }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon><v-icon color="green lighten-1">mdi-chevron-right</v-icon></v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider v-if="index < articleList.length - 1" :key="index"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>
<script>
  import { getArticleList } from '@/api/article'

  export default {
    name: 'ArticleList',
    data: () => ({
      articleList: []
    }),
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        let obj = { page: null, user_id: 1,}
        getArticleList(obj).then(res => {
          this.articleList = res
        })
      },
      itemClick(item) {
        this.$router.push({name: 'article', params:{id: item.id}})
      }
    }
  }
</script>

<style scoped>
  .v-card {
    box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1) !important;
  }
  .list-item {
    cursor: pointer;
    padding: 0 2%;
    font-family: 'Times New Roman','KaiTi' !important;
    transition: 0.2s ease-in-out;
  }
  .list-title {
    line-height: 2;
  }

  @media screen and (max-width: 600px){
    .list-item {
      padding: 0 4%;
    }
    .list-title {
      line-height: 1.5;
    }
    .list-subtitle {
      font-size: 12px;
    }
  }
</style>