<template>
  <main class="container">
    <Menu/>
    <div class="content-wrapper">
      <Header />
      <router-view />
      <Footer />
    </div>
  </main>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Menu from "@/components/Menu/Menu.vue";
  import Footer from "@/components/Footer/Footer.vue";
  import Header from "@/components/Header/Header.vue";

  @Options({
    components: {
      Menu,
      Footer,
      Header,
    }
  })

  export default class MainLayout extends Vue {}
</script>

<style scoped>

</style>
