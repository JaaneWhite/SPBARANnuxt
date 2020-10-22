<template>
  <header>
    <div class="header-topbar">
      <div class="search-form">
        <b-form action="" method="get">
          <b-form-input id="search-input" placeholder="Поиск" type="search"></b-form-input>
        </b-form>
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
      <main-menu />
    </div>
  </header>
</template>

<script>
import mainMenu from "@/components/mainMenu"
export default {
  name: "headerComponent",
  components: {mainMenu}
};
</script>

<style scoped>

</style>