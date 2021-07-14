<template>
  <svg
    class="icon"
    :aria-labelledby="iconName"
    :height="height"
    :width="width"
    role="presentation"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="iconColor">
      <component :is="icon"/>
    </g>
  </svg>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import DashboardIcon from '@/components/Common/Icon/Icons/DashboardIcon.vue'
  import TasksIcon from "@/components/Common/Icon/Icons/TasksIcon.vue";


  @Options({
    components: {
      DashboardIcon,
      TasksIcon
    },

    props: {
      iconName: {
        type: String,
        default: 'box'
      },
      width: {
        type: [Number, String],
        default: 24
      },
      height: {
        type: [Number, String],
        default: 24
      },
      iconColor: {
        type: String,
        default: 'currentColor'
      }
    }
  })

  export default class Icon extends Vue {

    private iconName = '';
    private width = 0;
    private height = 0;
    private iconColor = '';

    get icon() {
      return this.iconName;
    }

  }

</script>

<style scoped>

</style>
