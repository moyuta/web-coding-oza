<template>
  <table class="" border="1">
    <tr>
      <slot name="head"></slot>
    </tr>
    <slot name="content"></slot>
  </table>
</template>
  
<script>
export default {};
</script>
  
<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
</style>