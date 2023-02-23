<template>
  <div>
    <Header></Header>
    <NuxtPage />
    <div>フッター</div>
  </div>
</template>

<script>
import { Header } from "../components/organisms/Header";
export default {
  components: { Header },
};
</script>