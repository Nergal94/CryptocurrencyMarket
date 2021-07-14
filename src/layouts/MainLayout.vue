<template>
  <main class="content">
    <Menu/>
    <div class="content-wrapper">
      <Header :class="{ 'header--transparent' : isScroled}" />
      <router-view class="wrapper"/>
    </div>
  </main>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Menu from "@/components/Menu/Menu.vue";
  import Header from "@/components/Header/Header.vue";

  @Options({
    components: {
      Menu,
      Header,
    },


  })

  export default class MainLayout extends Vue {

    scrollY = 0;

    handleScroll() {
      this.scrollY = window.scrollY;
    }

    get isScroled() {
      return this.scrollY != 0;
    }

    created () {
      window.addEventListener('scroll', this.handleScroll);
    }

    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>

</style>
