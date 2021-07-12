<template>
  <div>
    <MainLayout />
  </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import MainLayout from "@/layouts/MainLayout.vue";

  @Options({
    components: {
      MainLayout
    }
  })

  export default class App extends Vue{

  }
</script>

<style lang="scss">
  @import "styles/main";
</style>
