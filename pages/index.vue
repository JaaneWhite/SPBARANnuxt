<template>
    <main>
       <div class="content-wrap">
       <div class="content-row">
         <div class="content-main">
           <b-container class="main-content-block">
             <b-row class="actual-title">Актуальное</b-row>
             <b-container class="news-rows">
               <b-row class="news-row">
               <news-block />
               <news-block />
               </b-row>
               <b-row class="news-row">
               <news-block />
               <news-block />
               </b-row>
             </b-container>
             </b-container>
           </div>


         <div class="contact-row">
           <b-container class="contact-row-inner">
            <b-row class="address-title">Адрес архива</b-row>
            <b-row class="info-row">
            <b-col md="auto" class="address-block">
              <div class="contact-block-logo"><b-img src="~/assets/SVG/map.svg" class="contact-logo"></b-img></div>
              <div>
                <div class="contact-block-title">ГДЕ МЫ НАХОДИМСЯ</div>
                <div class="contact-block-text">199034, Санкт-Петербург,</div>
                <div class="contact-block-text"><b>Университетская наб., д. 1</b></div>
              </div>
            </b-col>
            <b-col md="auto" class="transport-block">
             <div class="contact-block-logo"><b-img src="~/assets/SVG/bus.svg" class="contact-logo"></b-img></div>
             <div>
               <div class="contact-block-title">КАК ДО НАС ДОБРАТЬСЯ</div>
               <div class="contact-block-text">Троллейбус: <b>1, 7, 10, 11</b></div>
               <div class="contact-block-text">Автобус: <b>7, 10, 24, 47, 191</b></div>
               <div class="contact-block-text">От ст. метро Невский проспект/Гостиный двор, Адмиралтейская, Cпортивная, <br>
                 Василеостровская до остановки Университетская набережная (Кунсткамера)<br>
                 или Биржевая площадь.</div>
             </div>
            </b-col>
            <b-col md="auto" class="phone-block">
              <div class="contact-block-logo"><b-img src="~/assets/SVG/contacts.svg" class="contact-logo"></b-img></div>
              <div>
                <div class="contact-block-title">СВЯЖИТЕСЬ С НАМИ</div>
                <div class="contact-block-text">8 (812) 323-08-21</div>
                <div class="contact-block-text">(читальный зал)</div>
                <div class="contact-block-email"><b>archive@spbrc.nw.ru</b></div>
                <div class="read-more-link"><a href=#>Все контакты <b-img src="~/assets/SVG/arrow left.svg" class="img-arrow"></b-img></a></div>
              </div>
            </b-col>
           </b-row>
           </b-container>


         </div>
       </div>
       </div>


    </main>
</template>

<script>



import NewsBlock from '@/Components/newsBlock'
export default {
  name: 'home',
  components: {NewsBlock}
};


</script>


