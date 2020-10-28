<template>
  <b-nav pills class="top-menu">
    <b-nav-item to="/" class="menu-button-top">
      <b-img src="~/assets/SVG/home.svg" class="home-logo" alt="Home"></b-img>
    </b-nav-item>
    <b-nav-item class="menu-button-top" to="news">НОВОСТИ</b-nav-item>
    <b-nav-item-dropdown class="menu-button-top" id="dropdown-1" text="ОБ АРХИВЕ">
      <b-dropdown-item to="about">История архива</b-dropdown-item>
      <b-dropdown-item>Архив РАН</b-dropdown-item>
      <b-dropdown-item>Архивное законодательство</b-dropdown-item>
      <b-dropdown-item>Уставные документы</b-dropdown-item>
      <b-dropdown-item>Структура</b-dropdown-item>
      <b-dropdown-item>Сотрудники</b-dropdown-item>
      <b-dropdown-item>Архив в СМИ</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown id="dropdown-2" text="ЭЛЕКТРОННЫЙ КАТАЛОГ" class="menu-button-top">
      <b-dropdown-item to="funds">Фонды</b-dropdown-item>

    </b-nav-item-dropdown>
    <b-nav-item-dropdown id="dropdown-3" text="НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ" class="menu-button-top">
      <b-dropdown-item to="activities">Основные направления деятельности и научных исследований</b-dropdown-item>
      <b-dropdown-item to="publications">Публикации</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item to="exb" class="menu-button-top">ВЫСТАВКИ</b-nav-item>
    <b-nav-item to="services" class="menu-button-top">УСЛУГИ</b-nav-item>
    <b-nav-item to="contacts" class="menu-button-top">КОНТАКТЫ</b-nav-item>
  </b-nav>
</template>

<script>

export default {
  name: "mainMenu"
}
</script>

<style scoped>

</style>