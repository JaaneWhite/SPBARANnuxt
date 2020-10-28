<template>
  <div class="content-wrap">
    <b-container class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="page-title">Публикации</b-row>
        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-a class="publ-group-col">
            <b-row class="collapse-button">
              <b-col cols="11">
                Указатели по фондам архива РАН
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>

          </b-button>
          <b-collapse id="collapse-a" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Серия "Труды Архива". Обозрения архивных материалов</b-link></p>
              <p><b-link class="publ-link">Серия "Труды Архива". Прочие выпуски, посвященные фондам, хранящимся в АРАН (Москва)</b-link></p>
              <p><b-link class="publ-link">Серия "Труды Архива". Прочие выпуски, посвященные фондам, хранящимся в СПФ АРАН (Санкт-Петербург)</b-link></p>
              <p><b-link class="publ-link">Тематические указатели</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-b class="publ-group-col">
            <b-row class="collapse-button">
              <b-col cols="11">
                Отдел финансово-экономической и организационной работы
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>
          </b-button>
          <b-collapse id="collapse-b" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Отдел финансово-экономической и организационной работы</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-c class="publ-group-col">
          <b-row class="collapse-button">
            <b-col cols="11">
              Монографии
            </b-col>
            <b-col cols="1" class="collapse-img-arrow">
            </b-col>
          </b-row>
          </b-button>
          <b-collapse id="collapse-c" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Монографии</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-d class="publ-group-col">

            <b-row class="collapse-button">
              <b-col cols="11">
                Сборники статей / Материалы конференций
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>

          </b-button>
          <b-collapse id="collapse-d" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Сборники статей / Материалы конференций</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-e class="publ-group-col">
            <b-row class="collapse-button">
              <b-col cols="11">
                Справочные и методические издания
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>

          </b-button>
          <b-collapse id="collapse-e" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Справочные и методические издания</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-f class="publ-group-col">

            <b-row class="collapse-button">
              <b-col cols="11">
                Статьи сотрудников СПФ АРАН
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>

          </b-button>
          <b-collapse id="collapse-f" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Статьи сотрудников СПФ АРАН</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>

        <b-row class="publ-group-row">
          <b-button v-b-toggle.collapse-g class="publ-group-col">

            <b-row class="collapse-button">
              <b-col cols="11">
                Электронные публикации сотрудников СПФ АРАН
              </b-col>
              <b-col cols="1" class="collapse-img-arrow">
              </b-col>
            </b-row>
          </b-button>
          <b-collapse id="collapse-g" class="publ-col">
            <b-card class="publ-card">
              <p><b-link class="publ-link">Электронные публикации сотрудников СПФ АРАН</b-link></p>
            </b-card>
          </b-collapse>
        </b-row>
      </b-container>
    </b-container>
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