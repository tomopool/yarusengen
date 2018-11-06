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
            宣言日：{{declaration.create_date}}
          </li>
          <li>
            いつやるの？：{{whenDoIt(declaration.after_time, declaration.specified_time)}}
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.start()
  },
  destroyed () {
    this.$store.dispatch('clearDeclarations')
  },
  methods: {
    start () {
      this.$store.dispatch('getDeclarations')
    },
    whenDoIt(afterTime, specifiedTime) {
      if (afterTime !== null) {
        return `${afterTime} 分後`
      } else {
        return specifiedTime
      }
    },
    done(documentId) {
      this.$store.dispatch('doneDeclaration', {
        documentId
      })
      debugger
      document.getElementById(documentId).classList.toggle('is-show')
    }
  },
  computed: {
    declarations () {
      return this.$store.state.declarations
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
}

.declaration.is-show {
  transition-delay: 0s;
  opacity: 1;
  visibility: visible;
}
</style>
