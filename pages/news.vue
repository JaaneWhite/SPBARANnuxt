<template>
  <div class="content-wrap">
    <div class="content-row">
      <breadcrumbs />
      <b-container class="main-content-block">
        <b-row class="actual-title">Новости</b-row>
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
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs";
import pagination from "~/components/pagination";

export default {
  name: "news",
  components: {breadcrumbs, pagination}
}

</script>


<style scoped>

</style>
