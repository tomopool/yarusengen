<template>
  <div>
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
  </div>
</template>

<script>
export default {
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
    async yaru() {

      // Twitter に投稿する機能ぽぴい
      const data = {
        declaration: this.what
      }
      if (this.activeName === 'after') {
        data.after_time = this.whenAfter
        data.specified_time = null
      } else {
        data.after_time = null
        data.specified_time = this.whenSpecified
      }

      await this.$store.dispatch('addDeclaration', data)

      this.$message({
        message: 'やる宣言しました！',
        showClose: true,
        type: 'success',
        center: true
      });
    }
  }
}
</script>

<style>
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
.operation-area {
  margin: 1em;
}
</style>
