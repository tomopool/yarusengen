<template>
  <div class="main">
    <h1>やる宣言</h1>
    <div id="grid-container">
      <div id="nav-menu">
        <el-menu :default-active="defaultMenu" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="el-icon-star-on"></i>
            <span slot="title">宣言</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-tickets"></i>
            <span slot="title">リスト</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-tickets"></i>
            <span slot="title">サインアウト</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div id="contents">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseUI from '@/firebase/firebaseUI.js'

export default {
  name: 'Main',
  data() {
    return {
      isCollapse: false,
      defaultMenu: '1'
    }
  },
  created() {
    if (this.$route.name === 'List') {
      this.defaultMenu = '2'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      if (key === '1') {
        this.$router.push({name: 'Sengen'})
      } else if (key === '2') {
        this.$router.push({name: 'List'})
      } else if (key === '3') {
        firebaseUI.signOut()
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
#grid-container {
  display: grid; /* グリッドレイアウト */
  grid-template-rows: 80vh;
  grid-template-columns: 0.2fr 0.8fr;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 400px;
}
</style>
