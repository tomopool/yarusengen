<template>
  <div class="main">
    <h1>やる宣言</h1>
    <h2>いつやる？</h2>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="○○分後にやる" name="after">
          <div class="after">
            <el-input-number v-model="whenAfter" @change="handleChange" :min="1" :max="99"></el-input-number>分後
          </div>
        </el-collapse-item>
        <el-collapse-item title="時間指定でやる" name="specified">
          <div class="specified">
            <el-time-picker
              v-model="whenSpecified"
              :picker-options="{
                selectableRange: '00:00:00 - 23:59:59'
              }"
              :clearable="false"
              format="HH:mm"
              align="center"
              placeholder="Arbitrary time">
            </el-time-picker>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <h2>なにやる？</h2>
    <div>
      <div>
        <el-input placeholder="Please input" v-model="what"></el-input>
      </div>
      <div class="suggestion">
      </div>
    </div>
    <div class="operation-area">
      <el-button type="primary" @click="yaru" pround>やる！</el-button>
    </div>
    <button @click="showList">やること</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      activeName: 'after',
      whenAfter: '',
      whenSpecified: new Date(),
      what: ''
    }
  },
  methods: {
    handleChange() {
    },
    yaru() {
      this.$message({
        message: 'やる宣言しました！',
        showClose: true,
        type: 'success',
        center: true
      });
    },
    showList() {
      this.$router.push({name: 'List'})
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
.operation-area {
  margin: 1em;
}
</style>
