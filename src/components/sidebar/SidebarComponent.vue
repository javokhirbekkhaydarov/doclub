<template>
  <div class="sidebar_parent" :class="show_menu ? 'active_menu' : ''">
    <div class="sidebar_heading">
      <div class="sidebar_logo">
        <img src="@/assets/icons/sidebar_logo.svg" alt="" />
      </div>
      <div class="sidebar_menu">
        <div
          class="menu_items d-flex flex-column"
          v-for="item in menu"
          :key="item"
        >
          <div class="menu_item">{{ item.title }}</div>
          <router-link
            @click="openMenu"
            v-for="element in item.submenu"
            :key="element.path"
            :to="element.path"
            class="menu_links"
            :class="{ active_sidebar_bg: isActiveBg(element.path) }"
          >
            {{ element.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="sidebar_bottom">
      <LocaleSwitcher class="d-flex justify-content-start" />
      <div class="d-flex flex-column justify-content-start mt-4 sidebar_texts">
        <span class="m-0">Company Label place</span>
        <span class="m-0 sidebar_bottom_text"> Personal data protection </span>
      </div>
    </div>
  </div>
  <div
    class="toggle_menu_back"
    :class="show_menu ? 'active_sidebar_toggle' : null"
    @click="openMenu"
  ></div>
</template>

<script setup lang="ts">
import { computed, onUpdated } from "vue";

const show_menu = computed(() => store.getters.show_menu);

import menu from "@/static/menu";
import { useRoute } from "vue-router";
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";
import store from "@/store";
const openMenu = () => {
  store.commit("setMenu");
};
onUpdated(() => {

    if (show_menu.value) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

});

const route = useRoute();

const isActiveBg = (path: string): boolean => {
  return path === route.path;
};
</script>

<style></style>
