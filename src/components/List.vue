<template>
  <div>
    <table-view v-if="viewMode === 'table'" />
    <card-view v-if="viewMode === 'card'" />
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
  }
}
</script>
