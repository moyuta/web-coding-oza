<template>
  <div class="l-wrapper">
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<script>
import { Header } from "../components/organisms/Header";
export default {
  components: { Header },
};
</script>

<style lang='scss' scoped>
.l-wrapper {
  background-color: #eee;
}
</style>