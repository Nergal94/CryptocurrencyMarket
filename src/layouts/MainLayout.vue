<template>
  <main class="content">
    <Menu/>
    <div class="content-wrapper">
      <Header :class="{ 'header--transparent' : isScroled}" />
      <router-view class="wrapper"></router-view>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Menu from "@/components/Menu/Menu.vue";
  import Header from "@/components/Header/Header.vue";

  export default defineComponent({
    name: 'MainLayout',
    data: () => ({
      scrollY: 0
    }),
    components: {
      Menu,
      Header,
    },
    computed: {
      isScroled(): boolean {
        return this.scrollY != 0;
      }
    },
    methods: {
      handleScroll() {
        this.scrollY = window.scrollY;
      }
    },

    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  })
</script>

<style scoped>

</style>
