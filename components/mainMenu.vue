<template>
  <b-nav pills class="top-menu">
    <b-nav-item class="menu-button-top"><b-img src="~/assets/SVG/home.svg" class="home-logo" alt="Home"></b-img></b-nav-item>
    <b-nav-item class="menu-button-top">НОВОСТИ</b-nav-item>
    <b-nav-item-dropdown id="dropdown-1" text="ОБ АРХИВЕ" class="menu-button-top">
      <b-dropdown-item>История архива</b-dropdown-item>
      <b-dropdown-item>Архив РАН</b-dropdown-item>
      <b-dropdown-item>Архивное законодательство</b-dropdown-item>
      <b-dropdown-item>Уставные документы</b-dropdown-item>
      <b-dropdown-item>Структура</b-dropdown-item>
      <b-dropdown-item>Сотрудники</b-dropdown-item>
      <b-dropdown-item>Архив в СМИ</b-dropdown-item>
      <b-dropdown-item>Контакты</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown id="dropdown-2" text="ЭЛЕКТРОННЫЙ КАТАЛОГ" class="menu-button-top">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown id="dropdown-3" text="НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ" class="menu-button-top">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item class="menu-button-top">ВЫСТАВКИ</b-nav-item>
    <b-nav-item class="menu-button-top">УСЛУГИ</b-nav-item>
    <b-nav-item class="menu-button-top">КОНТАКТЫ</b-nav-item>
  </b-nav>
</template>

<script>

export default {
  name: "mainMenu"
}
</script>

<style scoped>

</style>