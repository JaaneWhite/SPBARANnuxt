<template>
  <div class="content-wrap">
    <b-container class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="page-title">Фонды</b-row>
        <b-row class="funds-search-row">
          <div class="funds-search-block">
            <div class="funds-search-title">Поиск по фондам архива</div>
            <div class="search-form">
              <b-form action="" method="get">
                <b-form-input id="search-input" placeholder="Введите номер фонда и/или слово в названии..." type="search"></b-form-input>
              </b-form>
            </div>
          </div>
        </b-row>
        <b-row class="funds-filter-row">
          <b-col cols="4">
            <div class="funds-filter-title">Архив</div>
            <treeselect v-model="value" :multiple="true" :options="options" class="funds-archive-filter" />


          </b-col>
          <b-col cols="8"></b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>

</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: "funds",
  components: { Treeselect },
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Электронный каталог',
          to: '/'
        },
        {
          text: 'Фонды',
          active: true
        }
      ],
      value: null,
      options: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        } ],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      } ],
    }
  }
}
</script>

<style scoped>

</style>