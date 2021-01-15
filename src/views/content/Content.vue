<template>
  <v-card v-if="showList" class="mx-auto">
    <v-list>
      <template v-for="(item, index) in articleList">
        <v-list-item :key="item.index" :to="'/article/' + item.id" class="list-item">
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
    name: 'Content',
    data: () => ({
      showList: false,
      articleList: []
    }),
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        let query = { page: null, user_id: 1 }

        getArticleList(query).then(response => {
          const { data } = response
          this.articleList = data
          this.showList = true
        })
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
    font-family: STFangSong, Helvetica, Arial, Vernada, Tahoma, STXihei, "Microsoft YaHei", "Songti SC", SimSun, Heiti, sans-serif;
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