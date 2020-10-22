<template>
  <b-row class="pagination">
    <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number

    ></b-pagination>
  </b-row>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
      rows: 100,
      currentPage: 1
    }
  }

}
</script>

<style scoped>

</style>