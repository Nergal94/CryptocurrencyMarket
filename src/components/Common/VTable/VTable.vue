<template>
  <div class="v-table">
    <div class="v-table__wrapper">
      <table>
        <thead>
        <tr>
          <th
            :key="field.value"
            v-for="field in fields"
          >
            <span>{{ field.label }}</span>
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
          :key="index"
          v-for="(item, index) in items"
        >
          <td
            :key="field.value"
            v-for="field in fields"
          >
            <slot :name="field.value" :data="item">
                <span>
                {{ item[field.value] }}
              </span>
            </slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, PropType} from 'vue';
  import {FieldsItem} from "@/models/FieldsItem";

  export default defineComponent({
    name: "VTable",
    props: {
      fields: {
        type: Array as PropType<FieldsItem[]>,
        default: () => []
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  })
</script>

<style lang="scss">
  @import "VTable";
</style>
