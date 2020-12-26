<template>
  <v-card class="mx-auto" flat>
    <h1 class="article-title">{{ article.title }}</h1>
    <p class="article-subtitle">{{ article.created_at }}</p>
    <v-md-preview :text="article.content"></v-md-preview>
  </v-card>
</template>

<script>
  import Vue from 'vue';
  import VMdPreview from '@kangc/v-md-editor/lib/preview';
  import '@kangc/v-md-editor/lib/style/preview.css';
  import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
  // import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
  // import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

  import { getArticleDetail } from '@/api/article'
  // VMdPreview.use(githubTheme)
  VMdPreview.use(vuepressTheme)
  // VMdPreview.use(vuepressTheme).use(createLineNumbertPlugin());
  // VMdPreview.use(githubTheme).use(createLineNumbertPlugin());
  Vue.use(VMdPreview)

  export default {
    name: 'Article',
    data: () => ({
      article: {},
    }),
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        let obj = { id: this.$route.params.id }
        getArticleDetail(obj).then(res => {
          this.article = res
        })
      }
    }
  }
</script>

<style scoped>
  .v-card {
    padding: 3% 5%;
    font-family: 'Times New Roman','KaiTi';
  }

  .article-title {
    font-size: 1.5rem;
  }

  /* 编辑器基础样式 */
  .v-md-editor-preview{
    padding: 0;
    /* font-size: 1.15em; */
    /* font-family: 'Times New Roman','KaiTi'; */
  }
  /* ----------- 不变样式 ----------- */
  /* 编辑器背景透明（不包括代码块背景） */
  .github-markdown-body div[class*='v-md-pre-wrapper-'] {
    background-color: transparent !important;
  }
  /* 代码块样式 */
  .v-md-editor-preview >>> pre {
    margin: 16px 0 !important;
  }

  .v-md-editor-preview  >>> code {
    /* githubTheme 标准字体大小 */
    font-size: 0.85rem !important; 
    font-weight: 500;
    box-shadow: none;
  }
  .v-md-editor-preview  >>> code::before {
    content: none;
  }
  .v-md-editor-preview  >>> code::after {
    content: none;
  }
  .v-md-editor-preview >>> h3 {
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