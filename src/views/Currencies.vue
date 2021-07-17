<template>
  <div class="home">
    <h1>Currencies</h1>

    <v-table
      :fields="fields"
      :items="currencies.data"
    >

      <template v-slot:currency="row">
        <strong> {{ row.data.name }} </strong>({{ row.data.currency }})
      </template>

      <template v-slot:price="row">
        {{ $filters.money(row.data.price) }}$
      </template>

      <template v-slot:market_cap="row">
        {{ $filters.money(row.data.market_cap) }}$
      </template>

      <template v-slot:volume="row">
        {{ $filters.money(row.data['1d'].volume) }}$
      </template>

    </v-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {api} from "@/api";
  import {apiResponse} from "@/compositions/ApiResponse";
  import {CurrenciesFields} from "@/constants/Fields/CurrenciesFields";

  export default defineComponent({
    name: 'Currencies',
    data: () => ({
      fields: CurrenciesFields
    }),
    setup() {
      const { response: currencies } = apiResponse(api.currencies.getAllCurrencies);

      return {
        currencies,
      }
    },
  });
</script>
