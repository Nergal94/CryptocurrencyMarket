<template>
  <div class="home">
    <h1>Currencies</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue';
  import {api} from "@/api";
  import {apiResponse} from "@/compositions/ApiResponse";

  export default defineComponent({
    name: 'Currencies',
    setup() {
      const { response: currencies } = apiResponse(api.currencies.getAllCurrencies);

      return {
        currencies,
      }
    },
  });
</script>
