<template>
  <div class="card-view-outer">
    <div v-for="declaration in declarations" :key="declaration.id" class="declaration is-show" :id="declaration.id">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{declaration.declaration}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="done(declaration.id)">Done</el-button>
        </div>
        <ul>
          <li>
            宣言日：{{formatDate(declaration.create_date)}}
          </li>
          <li>
            いつやる？：{{whenDoIt(declaration)}}
          </li>
        </ul>
      </el-card>
    </div>
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

<style>
.card-view-outer {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
}
.text {
  font-size: 14px;
}
ul {
  list-style: none;
  padding-left: 0px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.declaration {
  transition: opacity 1s, visibility 0s ease 1s;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  margin-bottom: 1em;
}

.declaration.is-show {
  transition-delay: 0s;
  opacity: 1;
  visibility: visible;
}
</style>
