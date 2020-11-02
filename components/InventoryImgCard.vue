<template>
  <b-col cols="2">
    <b-card class="inv-card">
      <b-card-img v-img src="~assets/img/tolstoy.png" top class="inv-image">
      </b-card-img>
      <b-card-text>1</b-card-text>


    </b-card>
  </b-col>
</template>
<script>
import Vue from 'vue';
import VueImg from 'v-img';

Vue.use(VueImg);
export default {
  name: 'inventoryImgCard'
}
</script>
