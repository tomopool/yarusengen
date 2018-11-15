<template>
  <div class="table-view-outer">
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
  </div>
</template>


<script>
import api from '../store/api.js'
export default {
  props: {
    declarations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    whenDoIt(declarationInfo) {
      let date
      if (declarationInfo.yaru_type === 'after') {
        date = api.addMinutesFromTimeStamp(declarationInfo.create_date, declarationInfo.after_time)
      } else {
        date = new Date(declarationInfo.specified_time.seconds * 1000)
        date.setSeconds(0)
      }
      return api.formatDateTime(date, 'yyyy/MM/dd HH:mm:ss')
    },
    formatDate(timeStamp) {
      return api.formatDateTimeFromTimeStamp(timeStamp, 'yyyy/MM/dd HH:mm:ss')
    },
    done(documentId) {
      this.$emit('done-declaration', documentId)
    }
  }
}
</script>

<style scoped>
.table-view-outer {
  padding: 1em;
}
</style>
