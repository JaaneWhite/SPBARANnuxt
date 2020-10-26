<template>
  <div class="content-wrap">
    <b-container class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="actual-title">Прейскурант</b-row>
        <b-row class="price-link">
          Прейскурант цен на работы и услуги, оказываемые Архивом РАН на платной основе,&nbsp;
          <b-link to="/">Скачать (15Кб)</b-link>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Услуги',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>