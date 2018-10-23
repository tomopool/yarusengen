<template>
  <div class="main">
    <h1>やる宣言</h1>
    <h2>いつやる？</h2>
    <div>
      <div class="after">
        <el-input-number v-model="whenAfter" @change="handleChange" :min="1" :max="99"></el-input-number>分後
      </div>
      <div class="specified">
        <el-time-picker
          v-model="whenSpecified"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="Arbitrary time">
        </el-time-picker>
      </div>
    </div>
    <h2>なにやる？</h2>
    <div>
      <div>
        <el-input placeholder="Please input" v-model="what"></el-input>
      </div>
      <div class="suggestion">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      whenAfter: '',
      whenSpecified: new Date(2016, 9, 10, 18, 40),
      what: ''
    }
  },
  methods: {
    handleChange() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
