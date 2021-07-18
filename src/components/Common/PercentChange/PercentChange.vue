<template>
  <span class="percent-change" :class="changeDirectionClass">
    {{ priceChange }}
  </span>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: "PercentChange",
    props: {
      priceChange: String
    },
    computed: {
      changeDirectionClass() {
        let classDirection = '';

        Number(this.priceChange) < 0 && (classDirection = 'percent-change--negative');
        Number(this.priceChange) > 0 && (classDirection = 'percent-change--positive');

        return classDirection;
      }
    }
  })
</script>

<style lang="scss">
  @import "PercentChange";
</style>
