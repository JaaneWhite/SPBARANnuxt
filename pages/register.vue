<template>
  <div class="content-wrap">
    <b-container class="content-row">
      <b-row class="breadcrumbs">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-row>
      <b-container class="main-content-block">
        <b-row class="page-title">Административно-хозяйственное управление ленинградских учреждений АН СССР</b-row>
        <b-container class="fund-info-cont">
          <b-row class="fund-info-title">
            <b-col>
            СВЕДЕНИЯ О ФОНДЕ
            </b-col>
            <b-col>
            КРАТКИЕ СВЕДЕНИЯ О ФОНДООБРАЗОВАТЕЛЕ
            </b-col>

          </b-row>
          <b-row class="fund-info-text">
            <b-col>
              <p><b>Крайние даты документов фонда:</b> 1804 - 1997</p>
              <p><b>Объём единиц хранения:</b> 23452 </p>
              <p><b>Переименования:</b></p>
              <p>1803-1893 Комитет Правления Академии наук</p>
              <p>1894-1927 Правление Академии наук </p>
              <p>1927-1934 Управление делами Академии наук СССР </p>
              <p>1934 - Административно-хозяйственное управление ленинградских учреждений Академии наук СССР</p>

            </b-col>
            <b-col class="fund-info-text-right">
              <p>Комитет Правления Академии наук учрежден в 1803 г, с 1894 г. Правление Академии наук, и с 1927 г. Управление делами АН.</p>
              <p>В регламенте Академии Наук 1803 г. и в Уставе ее 1836 г. говорится, что "Комитет наблюдает, под собственной ответственностью, за порядком во всех отделениях Академии, за сохранностью и целостью всякой ее собственности, денежной казны и учебных коллекций, за безопасностью зданий, за починкою их, украшением и распространением". Исполнительным органом Комитета Правления и Правления была Канцелярия во главе с советниками, правителем дел и столоначальниками. Уставом 1927 г. Правление Академии упразднено и его функции переданы Президиуму Академии, причем для выполнения распоряжений Президиума в отношении административных, хозяйственных и финансовых дел учреждено Управление делами Академии.</p>
            </b-col>
          </b-row>
        </b-container>
        <b-row class="fund-review-row">
          <b-col>
          <div class="fund-review-title">ОБОЗРЕНИЕ ФОНДА</div>
          <div class="fund-review-text">
            В состав фонда входят: <br>
            1. Журналы и протоколы за 1804-1926 гг. <br>
            2. Текущие дела за 1804-1929 гг. по вопросам: отпуск средств на содержание Академии, специальные средства, зарплата, прием и увольнение служащих, командировки и экспедиции, выдача паспортов, удостоверений и свидетельств, выдача пенсий и пособий, научные и хозяйственные ...
          </div>
            <div class="read-more-link">
              <a href="">Показать полный текст <b-img src="~/assets/img/arrow down.png" class="img-arrow-down"></b-img>
              </a>
            </div>
          </b-col>
          <b-col>
            <div class="fund-review-title">ИСТОРИЧЕСКАЯ СПРАВКА</div>
            <div class="fund-review-text">
              Комитет Правления Академии наук учрежден в 1803 г. С 1894 г. Правление Академии наук и с 1927 г. Управление делами АН. <br>
              В регламенте Академии наук 1803 г. и в Уставе ее 1836 г. говорится, что «Комитет наблюдает, под собственной ответственностью, за порядком во всех отделениях Академии, за сохранностью и целостью всякой ее собственности, денежной казны и учебных коллекций, за безопасностью зданий, за ...
            </div>
            <div class="read-more-link">
              <a href="">Показать полный текст <b-img src="~/assets/img/arrow down.png" class="img-arrow-down"></b-img>
              </a>
            </div>
          </b-col>
        </b-row>
        <b-container :class="treeMode" class="inventories">
        <b-row class="inventories-title-row">
          <b-col cols="11" class="fund-review-title">ПЕРЕЧЕНЬ ОПИСЕЙ (135)</b-col>
          <b-col cols="1" class="tree-mode-container">
                <b-button :class="activeTableMode" class="tree-mode-button table-mode-button" v-on:click="changeTreeMode('tableMode')"></b-button>
                <b-button :class="activeListMode" class="tree-mode-button list-mode-button " v-on:click="changeTreeMode('listMode')"></b-button>
          </b-col>
        </b-row>
        </b-container>

      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      treeMode: 'tableMode',
      activeTableMode: 'active',
      activeListMode: '',
        changeTreeMode: function (treeModeVar) {
          if (treeModeVar == 'tableMode') {
            if (this.activeListMode == 'active') {
              this.activeListMode = '';
              this.activeTableMode = 'active';
              this.treeMode = 'tableMode';
            }
          } else {
              this.activeListMode = 'active';
              this.activeTableMode = '';
              this.treeMode = 'listMode';
            }

        },
        items: [
          {
            text: 'Главная',
            to: '/'
          },
          {
            text: 'Электронный каталог',
            to: '/'
          },
          {
            text: 'Фонды',
            to: 'funds'
          },
          {
            text: 'Административно-хозяйственное управление ленинградских учреждений АН СССР',
            active: true
          }

        ]
      }
    }
}


</script>

<style scoped>

</style>