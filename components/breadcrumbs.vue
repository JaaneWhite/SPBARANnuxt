<template>
  <b-row class="breadcrumb">
  <b-breadcrumb :items="items"></b-breadcrumb>
  </b-row>
</template>

<script>
export default {
  name: "breadcrumbs",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Новости',
          to: 'news'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>