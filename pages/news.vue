<template>
  <div class="content-wrap">
    <div class="content-row">
      <div class="content-main">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="page-title">Новости</b-row>
        <b-container class="news-rows">
          <b-row class="news-row">
            <news-block />
            <news-block />
          </b-row>
          <b-row class="news-row">
            <news-block />
            <news-block />
          </b-row>
          <b-row class="news-row">
            <news-block />
            <news-block />
          </b-row>
          <b-row class="news-row">
            <news-block />
            <news-block />
          </b-row>
        </b-container>
        <b-row class="news-bottom">
          <b-col sm="5">
            <b-link to="#" class="news-archive-link">Архив новостей</b-link>

          </b-col>
          <b-col sm="7">
            <pagination />
          </b-col>
        </b-row>

      </b-container>

    </div>
  </div>
  </div>
</template>

<script>
import pagination from "~/components/pagination";

export default {
  name: "news",
  components: {pagination},
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Новости',
          active: true
        }
      ]
    }
  }
}

</script>


<style scoped>

</style>
