<template>
  <div class="main">
    <h1>やる宣言</h1>
    <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">やること宣言</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">やることリスト</span>
      </el-menu-item>
    </el-menu>
    <router-view name="Sengen" />
    <router-view name="YaruList" />
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)

      // this.$router.push({name: 'List'})
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
