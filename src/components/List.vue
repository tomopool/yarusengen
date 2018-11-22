<template>
  <div>
    <el-switch
      style="display: block"
      v-model="isCard"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="Card"
      inactive-text="Table"
      @change="toggleViewMode">
    </el-switch>
    <table-view
      v-if="viewMode === 'table'"
      :declarations="declarations"
      @done-declaration="handleDone"
      @delete-declaration="handleDelete"
    />
    <card-view
      v-if="viewMode === 'card'"
      :declarations="declarations"
      @done-declaration="handleDone"
      @delete-declaration="handleDelete"
    />
  </div>
</template>

<script>
import TableView from './Table'
import CardView from './Card'

export default {
  components: {TableView, CardView},
  data() {
    return {
      viewMode: 'card',
      isCard: true
    }
  },
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
    handleDone(documentId) {
      this.$store.dispatch('doneDeclaration', {
        documentId
      })
      document.getElementById(documentId).classList.toggle('is-show')
    },
    handleDelete(documentId) {
      this.$store.dispatch('deleteDeclaration', {
        documentId
      })
      document.getElementById(documentId).classList.toggle('is-show')
    },
    toggleViewMode() {
      this.viewMode = this.viewMode === 'card' ? 'table' : 'card'
    }
  },
  computed: {
    declarations () {
      return this.$store.state.declarations
    }
  }
}
</script>
