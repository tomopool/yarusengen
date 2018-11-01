<template>
  <div class="card-view-outer">
    <div v-for="declaration in declarations" :key="declaration.id">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{declaration.declaration}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
        </div>
        <ul>
          <li>
            宣言日： {{declaration.create_date}}
          </li>
          <li>
            いつやるの？： {{whenDoIt(declaration.after_date, declaration.specified_date)}}
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
    whenDoIt(afterDate, specifiedDate) {
      if (afterDate !== null) {
        return afterDate
      } else {
        return specifiedDate
      }
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
  .text {
    font-size: 14px;
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

  .box-card {
    width: 480px;
  }
</style>
