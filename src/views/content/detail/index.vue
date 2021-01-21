<template>
  <v-card class="mx-auto" flat>
    <h1 class="article-title">{{ article.title }}</h1>
    <p class="article-subtitle">{{ article.created_at }}</p>
    <v-md-preview :text="article.content"></v-md-preview>
  </v-card>
</template>

<script>
  import { getArticleDetail } from '@/api/article';

  export default {
    name: 'Detail',
    data: () => ({
      article: {},
    }),
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        let obj = { id: this.$route.params.id }
        getArticleDetail(obj).then(response => {
          const { data } = response
          this.article = data
        })
      }
    }
  }
</script>

<style scoped>
  .v-card {
    padding: 3% 5%;
    color: #666;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, Helvetica, STKaiti, SimSun, serif;
  }
  .article-title {
    font-size: 1.5rem;
  }
  /* 编辑器基础样式 */
  .v-md-editor-preview{
    padding: 0;
  }

  /* 编辑器图片样式 */
  .v-md-editor-preview p img{
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    max-width: calc(100% - 16px) !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* ----------- 不变样式 ----------- */
  /* 代码块样式 */
  .v-md-editor-preview >>> pre {
    margin: 16px 0 !important;
  }
  .v-md-editor-preview >>> h3 {
    margin: 24px 0 16px 0;
  }
  .v-md-editor-preview >>> h4 {
    margin: 24px 0 16px 0;
  }
  /* 图片样式 */
  .v-md-editor-preview >>> p img{
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    max-width: calc(100% - 16px) !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* 屏幕小于600px */
  @media screen and (max-width: 600px){
    .v-card {
      padding: 5%;
    }
    .article-title {
      font-size: 26px;
    }
    .v-md-editor-preview {
      font-size: 1em;
    }
  }
</style>