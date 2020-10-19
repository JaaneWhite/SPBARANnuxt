
  <template>
    <div>
      <header-component />
      <Nuxt />
      <footer-component />
    </div>
  </template>


<script>
import HeaderComponent from "@/components/headerComponent";
import FooterComponent from "@/components/footerComponent";
export default {
  name: "default.vue",
  components: {FooterComponent, HeaderComponent}
}
</script>

<style scoped>

</style>