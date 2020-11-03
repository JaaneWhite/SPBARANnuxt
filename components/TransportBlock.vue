<template>
  <b-col md="auto" class="transport-block">
    <b-col cols="2" class="contact-block-logo">
      <b-img src="~/assets/SVG/bus.svg" class="contact-logo"></b-img>
    </b-col>
    <b-col cols="10">
      <b-row class="contact-block-title">КАК ДО НАС ДОБРАТЬСЯ</b-row>
      <b-row class="contact-block-text">Троллейбус: <b>1, 7, 10, 11</b></b-row>
      <b-row class="contact-block-text">Автобус: <b>7, 10, 24, 47, 191</b></b-row>
      <b-row class="contact-block-text">От ст. метро Невский проспект/Гостиный двор, Адмиралтейская, Cпортивная,
        Василеостровская до остановки Университетская набережная (Кунсткамера)
        или Биржевая площадь.
      </b-row>
    </b-col>
  </b-col>
</template>
<script>
export default {
  name: 'transport-block'
}
</script>