<template>
  <div class="menu">
    <div class="menu__head">
      <div class="logo">
        <img alt="logo" src="../../assets/images/logo.png">
        <h1> CryptoMarket</h1>
      </div>
    </div>

    <div class="menu__body">

      <div class="user-box">
        <div class="user-box__photo">
          <img src="../../assets/images/user-avatar.png" alt="">
        </div>

        <div class="user-box__info">
          <h2>Sierra Ferguson</h2>
          <p>s.ferguson@gmail.com</p>
        </div>
      </div>

      <nav class="nav-bar">

          <router-link
            exact
            v-for="item in menuItems"
            :key="item.id"
            class="nav-bar__item"
            active-class="nav-bar__item--active"
            :to="{ name: item.route }"
          >
            <icon :iconName="item.icon"></icon>
            {{ item.name }}
          </router-link>

      </nav>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {menuItems} from "@/constants/Menu";

  export default defineComponent({
    name: 'Menu',
    data: () => ({
      menuItems: menuItems
    }),

  })
</script>

<style lang="scss">
  @import "Menu";
</style>
