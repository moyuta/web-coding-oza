<template>
  <div class="l-wrapper">
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

<style lang='scss' scoped>
.l-wrapper {
  // background-color: $sub-color;
}
</style>