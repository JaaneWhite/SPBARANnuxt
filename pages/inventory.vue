<template>
  <div class="content-wrap">
    <b-container class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="page-title">Материалы по учету личного состава: списки академиков и служащих с
          адресами и анкетными данными, алфавитные указатели</b-row>
        <b-row class="inv-info-row">
          <p><b>Крайние даты документов фонда:</b> 1804 - 1927</p>
          <p><b>Объём единиц хранения:</b> 210 </p>
        </b-row>
        <b-row class="collapse-group-row">
          <b-button v-b-toggle.collapse-gallery class="collapse-group-col">
            <b-row class="collapse-button">
              <b-col cols="11">
                 ОЦИФРОВАННАЯ ОПИСЬ ФОНДА (12)
                <b-button to="#" class="doc-review-button"></b-button>

              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>

          </b-button>
          <b-collapse id="collapse-gallery" class="inv-gallery">
            <b-card class="collapse-card">
              <b-row>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
                <inventoryImgCard/>
              </b-row>
            </b-card>
          </b-collapse>
        </b-row>
        <b-row class="collapse-group-row">
          <b-button v-b-toggle.collapse-table class="collapse-group-col">
            <b-row class="collapse-button">
              <b-col cols="11">
                ПЕРЕЧЕНЬ ДЕЛ (9)
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>
          </b-button>

          <b-collapse id="collapse-table">
            <b-card class="collapse-card">
              <b-row class="">
                <b-table :fields="tablefields" :items="tableitems" class="all-tables inv-table" borderless>
                </b-table>
              </b-row>
            </b-card>
          </b-collapse>
        </b-row>




      </b-container>
    </b-container>
  </div>
</template>

<script>
import InventoryImgCard from "@/components/InventoryImgCard";
export default {
  name: "inventory",
  components: {InventoryImgCard},
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
          to: 'funds'
        },
        {
          text: 'Административно-хозяйственное управление ленинградских учреждений АН СССР',
          to: 'register'
        },
        ,
        {
          text: 'Материалы по учету личного состава: списки академиков и служащих с адресами и анкетными данными, алфавитные указатели',
          active: true
        }

      ],
      tablefields: [
        {key: 'doc', label: 'Док.', variant: 'firstcol'},
        {key: 'iz', label: 'Из.',variant: 'infocol'},
        {key: 'num', label: 'Номер', variant: 'lbcol'},
        {key: 'title', label: 'Заголовок дела', variant: 'titlecol'},
        {key: 'first_date', label: 'Нач. дата', variant: 'lbcol'},
        {key: 'last_date', label: 'Кон. дата', variant: 'lbcol'},
        {key: 'sheets', label: 'Кол. лист', variant: 'lbcol'},
        {key: 'comment', label: 'Примечание', variant: 'lbcol'}


      ],

      tableitems: [
        {doc:'', iz: '', num:'1',title:'"Образ мира" Петра де Альяко (1350-1420)',first_date:'1350',last_date:'1420', sheets:'0', comment:''},
        {doc:'', iz: '', num:'2',title:'"Труды и трактаты" Ансельма, епископа Кентербеерийского (1033-1109)',first_date:'1033',last_date:'1109', sheets:'0', comment:''},
        {doc:'', iz: '', num:'3',title:'Толковый Новый Завет Николая де Лира',first_date:'б/д',last_date:'', sheets:'0', comment:''},
        {doc:'', iz: '', num:'4',title:'Декреты Базельского собора (издатель текста Себастьян Бранд, 1457-1521)',first_date:'1457',last_date:'1521', sheets:'0', comment:''},



      ]
    }
  }
}
</script>

