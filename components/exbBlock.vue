<template>
  <div class="exb-block">
    <div><b-img v-bind="mainProps" blank-color="#777" class="img-exb"></b-img></div>


    <div class="exb-body">
      <div class="exb-title">Иван Иванович Толстой (1880–1954): к 140-летию со дня рождения</div>
      <div class="exb-text">Филолог-классик Иван Иванович Толстой родился 26 августа 1880 г. в Санкт-Петербурге
        в семье выдающегося ученого, организатора науки и образования графа Ивана Ивановича Толстого и Людмилы Платоновны ...</div>
      <div class="exb-footer">
        <div class="exb-date">26.08.2020</div>
        <div class="read-more-link"><a href="exhibition">Смотреть выставку <b-img src="~/assets/SVG/arrow left.svg" class="img-arrow"></b-img></a></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "exbBlock"
}
</script>

<style scoped>

</style>