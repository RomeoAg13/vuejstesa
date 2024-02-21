<template>
  <HeaderComponent />

  <router-view v-slot="{ Component, route }">

    <transition :name="route.meta.transition">

      <component :is="Component" />

    </transition>

  </router-view>

  <NotificationComponent />

</template>

<script setup>
import { onMounted } from "vue";
import NotificationComponent from "./components/NotificationComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

onMounted(() => {
  console.log("🔵 App.vue has mounted");
});
</script>
