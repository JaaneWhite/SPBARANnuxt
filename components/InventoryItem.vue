<template>
  <b-col :cols="invItemCols" class="inv-item" :class="treeMode">
    <b-img class="inv-image" :class="treeMode" src="~assets/img/tolstoy.png"></b-img>
    <div class="inv-number" :class="treeMode">4a</div>
    <div class="inv-info" :class="treeMode">
      <div class="inv-title" :class="treeMode"><b-link to="inventory"> Материалы по учету личного состава: списки академиков и служащих с
        адресами и анкетными данными, алфавитные указатели</b-link>
      </div>
      <div class="inv-text" :class="treeMode">
        <b>№ Описи: &nbsp</b>4a<br>
        <b>Нач. дата: &nbsp</b> 1834<br>
        <b>Кон. дата: &nbsp</b> 1950<br>
        <b>Объем, едениц хранения: &nbsp</b> 506<br>
        <b>Оцифрованная опись фонда: &nbsp</b> 79<br>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'inventoryItem',
  props: {
    invItemCols: {},
    treeMode: {}
  }
}
</script>
