<template>
  <div class="news-block">
    <div><b-img v-bind="mainProps" blank-color="#777" class="img-news"></b-img></div>


    <div class="news-body">
      <div class="news-title">Конкурс на замещение вакантной
        должности старшего научного
        сотрудника - заведующего отделом</div>
      <div class="news-text">Санкт-Петербургский филиал Архива РАН объявляет конкурс на замещение вакантной
        должности старшего научного сотрудника - заведующего Отделом обработки фондов,
        комплектования и ведомственных архивов.</div>
      <div class="news-footer">
        <div class="news-date">27.08.2020</div>
        <div class="read-more-link"><a href=#>Читать новость <b-img src="~/assets/SVG/arrow left.svg" class="img-arrow"></b-img></a></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "newsBlock.vue"
}
</script>

<style scoped>

</style>