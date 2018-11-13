<template>
  <div>
    <table-view
      v-if="viewMode === 'table'"
      :declarations="declarations"
      :done="handleDone"
    />
    <card-view
      v-if="viewMode === 'card'"
      :declarations="declarations"
      @done-declaration="handleDone"
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
      viewMode: 'card'
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
    }
  },
  computed: {
    declarations () {
      return this.$store.state.declarations
    }
  }
}
</script>
