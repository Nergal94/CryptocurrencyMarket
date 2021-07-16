<template>
  <div class="home">
    <h1>Currencies</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue';
  import {api} from "@/api";

  export default defineComponent({
    name: 'Currencies',
    setup() {
      onMounted(() => {
        api.currencies.getAllCurrencies()
      });
    }
  });
</script>
