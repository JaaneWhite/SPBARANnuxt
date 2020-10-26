<template>
  <div class="content-wrap">
    <div class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="contact-page-row">
          <b-col class="contact-page-address-block">
            <b-row class="actual-title">Адрес архива</b-row>
            <b-row>
              <address-block class="contacts-ab"/>
              <transport-block class="contacts-ab" />
              <b-img class="contact-image" src="~assets/img/map.png"></b-img>
              <div class="address-text">Здание Архива расположено во дворе Зоологического музея/института
                РАН. Проход во двор  с Университетской набережной, между зданиями
                Кунсткамеры и Зоологического музея/ института</div>
              <b-img class="contact-image" src="~assets/img/img.png"></b-img>

            </b-row>

          </b-col>
          <b-col class="contact-page-phone-block">
            <b-row class="actual-title">Телефоны</b-row>
            <b-row class="phone-title">
              <b-col md="auto"><b>Дирекция</b></b-col>
              <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
              <b-col md="auto"><b>8 (812) 328-05-12</b> (тел./факс)</b-col>
            </b-row>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Тункина Ирина Владимировна</b> / Врио директора, чл.-корр. РАН, д.и.н.</div>

              <div class="phone-fio"><b>Бондарь Лариса Дмитриевна</b> / Ученый секретарь, к.и.н.</div>

              <div class="phone-fio"><b>Пантелеев Андрей Александрович</b> / Ведущий инженер</div>

              <div class="phone-fio"><b>Поникаровская Марина Владимировна</b> / Глав. спец. по кадрам, к.и.н.</div>

            </b-row>
            <b-row class="phone-title">
              <b-col md="auto"><b>Бухгалтерия</b></b-col>
              <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
              <b-col md="auto"><b>8 (812) 323-99-83</b> (тел./факс)</b-col>
            </b-row>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Федорова Лариса Александровна</b> / Гл. бухгалтер</div>

              <div class="phone-fio"><b>Гальцева Любовь Васильевна</b> / Зам. главного бухгалтера</div>

              <div class="phone-fio"><b>Михалёва Виктория Борисовна</b> / Глав. специалист-экономист</div>

            </b-row>
            <b-row class="phone-title">
              <b-col md="auto"><b>Читальный зал</b></b-col>
              <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
              <b-col md="auto"><b>8 (812) 323-08-21</b> (тел)</b-col>
            </b-row>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Груздева Елена Николаевна</b> / Зав. отделом и читальным залом, к.и.н.</div>
            </b-row>
            <b-container class="phone-title">
              <b-row md="xl"><b>Отдел обработки фондов, комплектования</b></b-row>
              <b-row class="second-line-row">
              <b-col md="auto"><b>и ведомственных архивов </b></b-col>
              <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
              <b-col md="auto"><b>8 (812) 323-67-64</b> (тел)</b-col>
              </b-row>
            </b-container>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Застрожнова Евгения Григорьевна</b> / Зав. отделом, к.и.н.</div>
            </b-row>

            <b-container class="phone-title">
              <b-row md="xl"><b>Лаборатория консервации</b></b-row>
              <b-row class="second-line-row">
                <b-col md="auto"><b>и реставрации документов </b></b-col>
                <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
                <b-col md="auto"><b>8 (812) 328-76-80</b> (тел)</b-col>
              </b-row>
            </b-container>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Галушкин Александр Алексеевич</b> / Зав. лабораторией, к.и.н.</div>
            </b-row>

            <b-container class="phone-title">
              <b-row md="xl"><b>Научно-справочная библиотека</b></b-row>
              <b-row class="second-line-row">
                <b-col md="auto"><b>(Сектор БАН при СПбФ АРАН)</b></b-col>
                <b-col md="auto"><b-img src="~assets/img/tire.png"></b-img></b-col>
                <b-col md="auto"><b>8 (812) 323-08-21</b> (тел)</b-col>
              </b-row>
            </b-container>
            <b-row class="phone-text">
              <div class="phone-fio"><b>Логинова Татьяна Сергеевна</b> / Главный библиотекарь</div>
            </b-row>

          </b-col>
        </b-row>
      </b-container>
    <b-container class="requisites-block">
      <b-row>
        <b-col class="req-title">Реквизиты</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Полное наименование:</b-col>
        <b-col class="req-text" cols="10">Санкт-Петербургский филиал Федерального государственного бюджетного учреждения науки Архива Российской академии наук (СПбФ АРАН)</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Юридический адрес:</b-col>
        <b-col class="req-text" cols="10">199034 Санкт-Петербург, Университетская наб., д. 1</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Врио директора:</b-col>
        <b-col class="req-text" cols="10">Тункина Ирина Владимировна действует по доверенности б/н врио директора Федерального государственного бюджетного учреждения науки
        Архива Российской академии наук (АРАН) от 08 мая 2019 года</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">ИНН/КПП:</b-col>
        <b-col class="req-text" cols="10">ИНН 7727028890 КПП 780102001;</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Получатель:</b-col>
        <b-col class="req-text" cols="10">УФК по г. Санкт-Петербургу (ОФК 15, СПбФ АРАН, л/с 20726Ч71150);</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Р/счет:</b-col>
        <b-col class="req-text" cols="10">№ 40501810300002000001;</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Банк получателя:</b-col>
        <b-col class="req-text" cols="10">Северо-Западное ГУ Банка России г. Санкт-Петербург;</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">БИК банка получателя:</b-col>
        <b-col class="req-text" cols="10">044030001</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">КБК:</b-col>
        <b-col class="req-text" cols="10">00000000000000000130</b-col>
        <div class="w-100"></div>
        <b-col class="req-name" cols="2">Код ОКАТО:</b-col>
        <b-col class="req-text" cols="10">40263561000</b-col>

      </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
import AddressBlock from "@/components/AddressBlock";
import TransportBlock from "@/components/TransportBlock";
export default {
  name: "contacts",
  components: {TransportBlock, AddressBlock},
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Контакты',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>