







<template>
  <main class="home-page">
    <TitleComponent h-type="h1" text-content="BuyPc" data-info="hello" />
    <section class="home-page__actions">

      <button @click="onClick">All products</button>
    
    </section>
  </main>
</template>














<script setup>

import { onBeforeMount, onMounted, onUnmounted } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { setNewMessage, setContent } from "../stores/message-store";
import { useMountComposable } from "../composables/mount";
import { useRouter } from "vue-router";
const router = useRouter();
const { setMountMessage } = useMountComposable();

onBeforeMount(() => {
  setMountMessage("🟠 HomePage.vue is about to mount");
});

onMounted(()=>{
  console.log('homeview page has mounted')
})

onUnmounted(() => {
  console.log("homeview has been destroyed")
});

const onClick = () => {
  router.push({ name: "shop" });
};

</script>

















<style lang="scss" scoped>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__actions {
    justify-content: center;

    button {
      opacity: 1;
      font-family: "Poppins", sans-serif;
      box-shadow: 0 3px rgba(226, 140, 224, 0.5);

      &:active {
        box-shadow: none;
        transform: translateY(2px);
      }
    }
  }
}
</style>
