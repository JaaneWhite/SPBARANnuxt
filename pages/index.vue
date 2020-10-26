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
              <b-col cols="3"><address-block /></b-col>
              <b-col cols="6"><transport-block/></b-col>
              <b-col cols="3"><phone-block/></b-col>
           </b-row>
           </b-container>


         </div>
       </div>
       </div>


    </main>
</template>

<script>


import NewsBlock from '@/Components/newsBlock'
import AddressBlock from "@/components/AddressBlock";
import TransportBlock from "@/components/TransportBlock";
import PhoneBlock from "@/components/PhoneBlock";

export default {
  name: 'home',
  components: {PhoneBlock, TransportBlock, AddressBlock, NewsBlock}
};


</script>


