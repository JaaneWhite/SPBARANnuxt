<template>
  <header>
    <div class="header-topbar">
      <div class="search-form">
        <form action="" method="get">
          <input id="search-input" placeholder="Поиск" type="search">
        </form>
      </div>
      <div class="lang-switcher">
        <span class="locale"><a href="/?lc=ru">РУ</a></span>
        <span class="locale-delimiter"> | </span>
        <span class="locale"><a href="/?lc=en">EN</a></span>
      </div>

    </div>

    <div class="header-logobar">
      <div class="logo-arch">
        <img class="img-logo" src="~/assets/img/logo.png" />

        <div class="title-arch">
          <div class="title-text">САНКТ-ПЕТЕРБУРГСКИЙ ФИЛИАЛ АРХИВА <br> РОССИЙСКОЙ АКАДЕМИИ НАУК</div>
          <div class="title-aran">СПбФ АРАН</div>

        </div>
        <img class="img-book" src="~/assets/img/book.png" />
      </div>
    </div>

    <div class="main-menu-bar">
      <div class="top-menu">
        <b-button class="menu-button-top"><b-img src="~/assets/SVG/home.svg" class="home-logo" alt="Home"></b-img></b-button>
        <b-button class="menu-button-top">НОВОСТИ</b-button>
        <b-dropdown id="dropdown-1" text="ОБ АРХИВЕ" class="menu-button-top">
          <b-dropdown-item>История архива</b-dropdown-item>
          <b-dropdown-item>Архив РАН</b-dropdown-item>
          <b-dropdown-item>Архивное законодательство</b-dropdown-item>
          <b-dropdown-item>Уставные документы</b-dropdown-item>
          <b-dropdown-item>Структура</b-dropdown-item>
          <b-dropdown-item>Сотрудники</b-dropdown-item>
          <b-dropdown-item>Архив в СМИ</b-dropdown-item>
          <b-dropdown-item>Контакты</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-2" text="ЭЛЕКТРОННЫЙ КАТАЛОГ" class="menu-button-top">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-3" text="НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ" class="menu-button-top">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-button class="menu-button-top">ВЫСТАВКИ</b-button>
        <b-button class="menu-button-top">УСЛУГИ</b-button>
        <b-button class="menu-button-top">КОНТАКТЫ</b-button>
      </div>


    </div>
  </header>
</template>

<script>
export default {
  name: "headerComponent"
}
</script>

<style scoped>

</style>