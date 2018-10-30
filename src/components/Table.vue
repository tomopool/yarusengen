<template>
  <div>
    <h1>やることリスト</h1>
    <el-table
      :data="declarations"
      height="250"
      style="width: 100%">
      <el-table-column
        prop="declaration"
        label="declaration">
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="create_date">
      </el-table-column>
      <el-table-column
        prop="after_time"
        label="after_time">
      </el-table-column>
      <el-table-column
        prop="specified_time"
        label="specified_time">
      </el-table-column>
    </el-table>
    <div>
      <button @click="toMain">もどる</button>
    </div>
  </div>
</template>


<script>
import {
  startListener
} from '../store/actions.js'

export default {
  mounted () {
    this.start()
  },
  destroyed () {
    this.$store.dispatch('clearDeclarations')
  },
  methods: {
    // init () {
    //   this.$store.dispatch('memos/clear')
    // },
    start () {
      // this.$store.dispatch('startListener')
      this.$store.dispatch('getDeclarations')
    },
    // stop () {
    //   this.$store.dispatch('memos/stopListener')
    // },
    // remove (id) {
    //   this.$store.dispatch('clearDeclarations')
    // },
    toMain() {
      this.$router.push({name: 'Main'})
    }
  },
  computed: {
    declarations () {
      return this.$store.state.declarations
    }
  }
}
</script>