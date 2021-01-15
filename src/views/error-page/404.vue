<template>
  <div id="notfound">
    <div>
      <p>404 丨 NOT FOUND</p>
      <div><v-btn text small tile color="#666" to="/">返回首页</v-btn></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page404',
    methods: {
      ToIndexClick() {
        this.$router.push('/')
      }
    },
    beforeCreate () {
      document.querySelector('html').setAttribute('style', 'overflow-y:auto')
    },
  }
</script>

<style scoped>
  #notfound {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
  }
  #notfound div {
    text-align: center;
  }
  #notfound div p {
    font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    color: #888;
    margin-bottom: 6px;
  }
</style>