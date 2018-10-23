<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import locale from 'element-ui/lib/locale'
import en from 'element-ui/lib/locale/lang/en'

export default {
  name: 'App',
  async beforeCreate() {
    locale.use(en)
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
