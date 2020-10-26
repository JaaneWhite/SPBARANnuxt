<template>
  <div class="content-wrap">
    <div class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="actual-title">Выставочная деятельность</b-row>
        <b-row class="year-filter">
          <div class="years-col">
          <b-link class="year-link">2020</b-link>
          <b-link class="year-link">2019</b-link>
          <b-link class="year-link">2018</b-link>
          </div>
        </b-row>
        <b-container class="exb-rows">
          <b-row class="exb-row">
            <exb-block />
            <exb-block />
          </b-row>
          <b-row class="exb-row">
            <exb-block />
            <exb-block />
          </b-row>
          <b-row class="exb-row">
            <exb-block />
            <exb-block />
          </b-row>
          <b-row class="exb-row">
            <exb-block />
            <exb-block />
          </b-row>
        </b-container>
        <b-row class="exb-bottom">
          <div class="exb-pages"><pagination /></div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ExbBlock from "@/components/exbBlock";
import Pagination from "@/components/pagination";
export default {
  name: "exb",
  components: {Pagination, ExbBlock},
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Выставки',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>