<template>
  <div class="content-wrap">
    <div class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="actual-title">Публикации</b-row>
        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-a class="publ-group-col">Указатели по фондам архива РАН</b-button>
          <b-collapse id="collapse-a" class="publ-col">
            <b-card>I am collapsible content A!</b-card>
          </b-collapse>
        </b-row>
      </b-container>
    </div>
  </div>

</template>

<script>
export default {
  name: "publications",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Научная деятельность - Публикации',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>