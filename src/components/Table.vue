<template>
  <div class="table-view-outer">
    <el-table
      :data="tableData"
      height="250"
      style="width: 100%">
      <el-table-column
        prop="declaration"
        label="宣言">
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="宣言日">
      </el-table-column>
      <el-table-column
        prop="when_do_it"
        label="いつやる？">
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
  computed: {
    tableData() {
      const data = this.declarations.map(declarationInfo => {
        return {
          declaration: declarationInfo.declaration,
          create_date: this.formatDate(declarationInfo.create_date),
          when_do_it: this.whenDoIt(declarationInfo)
        }
      })
      return data
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
