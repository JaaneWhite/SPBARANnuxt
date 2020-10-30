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
            <treeselect
                v-model="value"
                :multiple="true"
                :options="options"
                :defaultExpandLevel="1"
                :openDirection="bottom"
                class="funds-archive-filter" />
          </b-col>
          <b-col cols="2" class="filter-col">
            <div class="funds-filter-title">Структура док. собрания:</div>
            <b-form-select v-model="selecteddoc" :options="optionsdoc" plain="true"></b-form-select>
          </b-col>
          <b-col cols="2" class="filter-col">
            <div class="funds-filter-title">Искать по:</div>
            <b-form-select v-model="selectedsearch" :options="optionssearch" plain="true"></b-form-select>

          </b-col>
          <b-col cols="2" class="filter-col">
            <div class="funds-filter-title">Сортировать по:</div>
            <b-form-select v-model="selectedsortA" :options="optionssortA" plain="true"></b-form-select>

          </b-col>
          <b-col cols="2" class="filter-col">
            <div class="funds-filter-title" plain="true">Сортировка по:</div>
            <b-form-select v-model="selectedsortB" :options="optionssortB" plain="true">
            </b-form-select>

          </b-col>
        </b-row>
        <b-row class="funds-pagin-row">
          <b-col cols="4" class="funds-num-col">
            <div class="funds-filter-title">Всего фондов: 1-20 из 5500</div>
          </b-col>
          <b-col cols="8" class="funds-pag-col">
          <pagination />
          </b-col>
        </b-row>
        <b-row class="funds-table-row">
          <b-list-group class="funds-list">
            <b-list-group-item href="register" class="fund-item">
              <b-row>
                <b-col cols="3" class="fund-item-archive">РФ ГПНТБ СО РАН</b-col>
                <b-col cols="1" class="fund-item-num">0</b-col>
                <b-col cols="8" class="fund-item-name">Западноевропейское собрание Отдела редких книг и рукописей Государственной публичной научно-технической библиотеки Сибирского отделения РАН</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="fund-item">
              <b-row>
                <b-col cols="3" class="fund-item-archive">ЦВРК ИМБТ СО РАН</b-col>
                <b-col cols="1" class="fund-item-num">К-0</b-col>
                <b-col cols="8" class="fund-item-name">Монгольский фонд</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="fund-item">
              <b-row>
                <b-col cols="3" class="fund-item-archive">ЦВРК ИМБТ СО РАН</b-col>
                <b-col cols="1" class="fund-item-num">К-0</b-col>
                <b-col cols="8" class="fund-item-name">Общий архивный фонд</b-col>
              </b-row>
            </b-list-group-item>

          </b-list-group>
        </b-row>
        <b-row class="funds-pagin-row">
          <b-col cols="4">

          </b-col>
          <b-col cols="8" class="funds-pag-col">
            <pagination />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>

</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Pagination from "@/components/pagination";

export default {
  name: "funds",
  components: {Pagination, Treeselect },
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
        id: 'all',
        label: 'Все архивы',
        children: [ {
          id: 'msk',
          label: 'г. Москва и московская область',
          children: [
            {
              id: 'msk-gork',
              label: 'Архив А.М. Горького Института мировой литературы им. А.М. Горького РАН'
            },
            {
            id: 'msk-aran',
            label: 'Архив Российской Академии наук'
            },
            {
              id: 'msk-meteor',
              label: 'Архив комитета по метеоритам РАН'
            },
            {
              id: 'msk-keld',
              label: 'Документальный фонд Кабинета-музея М.В. Келдыша при Институте прикладной математики им. М.В. Келдыша РАН'
            },
            {
              id: 'msk-gorkdoc',
              label: 'Документальный фонд Мемориального Дома-музея А.М. Горького Института мировой литературы им. А.М. Горького РАН'
            },
            {
              id: 'msk-buhar',
              label: 'Документальный фонд Мемориального кабинета-музея Н.И. Бухарина при Институте истории науки и техники им. С.И. Вавилова РАН'
            },
            {
              id: 'msk-kap',
              label: 'Документальный фонд Мемориального кабинета-музея П.Л. Капицы при Институте физических проблем им. П.Л. Капицы РАН'
            }

        ] },
          {
          id: 'spb',
          label: 'г. Санкт-Петербург и Лениградская область',
        } ],
      } ],
      selecteddoc: 'rel',
      optionsdoc: [
        { value:'rel', text: 'релевантности' },
        { value: 'vol', text: 'объему' }
      ],
      selectedsearch: 'all',
      optionssearch: [
        { value:'all', text: 'всем полям' },
        { value: 'obr', text: 'кратким сведениям по фондообр-ю' }
      ],
      selectedsortA: 'rel',
      optionssortA: [
        { value:'rel', text: 'релевантности' },
        { value: 'vol', text: 'объему' }
      ],
      selectedsortB: 'asc',
      optionssortB: [
        { value:'asc', text: 'возрастанию' , class: 'filter-option'},
        { value: 'desc', text: 'убыванию' }
      ],
      tablefields: [
        {key: 'archive',  variant: ''},
        {key: 'fund_num', variant: ''},
        {key: 'fund_name', variant: ''}
      ],

      tableitems: [
        {archive:'РФ ГПНТБ СО РАН', fund_num: '0', fund_name:'Западноевропейское собрание Отдела редких книг и рукописей Государственной публичной научно-технической библиотеки Сибирского отделения РАН'},

        ]
    }
  }
}
</script>

<style scoped>

</style>