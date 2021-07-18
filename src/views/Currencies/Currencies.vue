<template>
  <div class="home">
    <h1>Currencies</h1>

    <v-table
      :fields="fields"
      :items="currencies.data"
    >

      <template v-slot:currency="row">
        <div class="currency">
          <img :src="row.data.logo_url" alt="">
          <strong> {{ row.data.name }} </strong>({{ row.data.currency }})
        </div>
      </template>

      <template v-slot:price="row">
        <price-change :price="row.data.price" />
      </template>

      <template v-slot:market_cap="row">
        ${{ $filters.bilion(row.data.market_cap) }}B
      </template>

      <template v-slot:volume="row">
        ${{ row.data['1d'] && $filters.bilion(row.data['1d'].volume) }}B
      </template>

      <template v-slot:dayChange="row">
        <PercentChange :price-change="row.data['1d'].price_change_pct" />
      </template>

      <template v-slot:weekChange="row">
        <PercentChange :price-change="row.data['7d'].price_change_pct" />
      </template>

    </v-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {api} from "@/api";
  import {apiResponse} from "@/compositions/ApiResponse";
  import {CurrenciesFields} from "@/constants/Fields/CurrenciesFields";
  import PercentChange from "@/components/Common/PercentChange/PercentChange.vue";
  import PriceChange from "@/components/Common/PriceChange/PriceChange.vue";

  export default defineComponent({
    name: 'Currencies',
    data: () => ({
      fields: CurrenciesFields,
    }),
    components: {
      PercentChange,
      PriceChange
    },
    setup() {
      const { response: currencies } = apiResponse(api.currencies.getAllCurrencies, true, 5000);

      return {
        currencies,
      }
    },
  });
</script>

<style lang="scss">
  @import "Currencies";
</style>
