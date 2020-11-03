<template>
  <b-col md="auto" class="phone-block">
    <b-col cols="4" class="contact-block-logo">
      <b-img src="~/assets/SVG/contacts.svg" class="contact-logo"></b-img>
    </b-col>
    <b-col cols="8">
      <b-row class="contact-block-title">СВЯЖИТЕСЬ С НАМИ</b-row>
      <b-row class="contact-block-text">8 (812) 323-08-21</b-row>
      <b-row class="contact-block-text">(читальный зал)</b-row>
      <b-row class="contact-block-email"><b>archive@spbrc.nw.ru</b></b-row>
      <b-row class="read-more-link"><a href=#>Все контакты
        <b-img src="~/assets/SVG/arrow left.svg" class="img-arrow"></b-img>
      </a></b-row>
    </b-col>
  </b-col>
</template>
<script>
export default {
  name: 'phone-block'
}
</script>