<template>
  <header>
    <row class="header-topbar">
      <b-container>
        <b-row>
          <b-col cols="11" class="search-form">
            <b-form action="" method="get">
              <b-form-input id="search-input" placeholder="Поиск" type="search"></b-form-input>
            </b-form>
          </b-col>
          <b-col cols="1" class="lang-switcher">
            <div>
              <span class="locale"><a href="/?lc=ru">РУ</a></span>
              <span class="locale-delimiter"> | </span>
              <span class="locale"><a href="/?lc=en">EN</a></span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </row>

    <div class="header-logobar">
      <b-container>

      <b-row class="logo-arch">

        <b-col cols="2" class="img-logo-col">
         <b-img class="img-logo" src="~/assets/img/logo.png" />
        </b-col>

        <b-col cols="8" class="title-arch">
          <div class="title-text">САНКТ-ПЕТЕРБУРГСКИЙ ФИЛИАЛ АРХИВА <br> РОССИЙСКОЙ АКАДЕМИИ НАУК</div>
          <div class="title-aran">СПбФ АРАН</div>
        </b-col>
        <b-col cols="2" class="img-book-col">
          <img class="img-book" src="~/assets/img/book.png" />
        </b-col>

      </b-row>
      </b-container>

    </div>

    <b-container class="main-menu-bar">
      <main-menu />
    </b-container>
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