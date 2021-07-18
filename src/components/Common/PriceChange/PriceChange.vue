<template>
  <span class="price-change" :class="changePriceDirection">
    ${{ $filters.money(price) }}
  </span>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: "PriceChange",
    data: () => ({
      previousPrice: 0,
    }),
    props: {
      price: String
    },
    computed: {
      changePriceDirection() {
        let classDirection = '';

        (Number(this.price) > this.previousPrice) && (classDirection = 'price-change--positive');
        (Number(this.price) < this.previousPrice) && (classDirection = 'price-change--negative');

        return classDirection;
      }
    },
    created(): void {
      this.previousPrice = Number(this.price);
    },
    watch: {
      price(price) {
        setTimeout(() => this.previousPrice = price, 2000);
      }
    },
  })
</script>

<style lang="scss">
  @import "PriceChange";
</style>
