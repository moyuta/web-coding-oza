<template>
  <div class="l-header">
    <div class="menu-btn is-sp">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li><nuxt-link to="/">ホーム</nuxt-link></li>
        <li><nuxt-link to="/">私達について</nuxt-link></li>
        <li><nuxt-link to="/">選ばれる理由</nuxt-link></li>
        <li><nuxt-link to="/">ワークフロー</nuxt-link></li>
        <li><nuxt-link to="/">FAQ</nuxt-link></li>
        <li><nuxt-link to="/">事例紹介</nuxt-link></li>
        <li><nuxt-link to="/">会社概要</nuxt-link></li>
        <li><nuxt-link to="/">お問合せ・お見積</nuxt-link></li>
        <li><nuxt-link to="/">個人情報保護法について</nuxt-link></li>
      </ul>
      <!-- <div class="nav-sns is-sp">
        <a href="" class="nav-sns__icon">
          <img src="@/assets/gvg/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="" class="nav-sns__icon">
          <img src="@/assets/gvg/icon-instagram.svg" alt="instagram" />
        </a>
        <a href="" class="nav-sns__icon">
          <img src="@/assets/gvg/icon-pintarest.svg" alt="pintarest" />
        </a>
      </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang='scss' scoped>
.l-header {
  @include tablet {
    margin-inline: 50px;
    margin-block-start: 30px;
  }
  .nav {
    @include mobile {
      border: 1px solid $colorText;
      margin-inline: 20px;
      padding-inline: 20px;
    }
    &-list {
      display: flex;
      & > * + * {
        margin-inline: 40px 0;
        @include mobile {
          margin-inline: 0;
        }
      }
      @include mobile {
        flex-direction: column;
      }
      li {
        a {
          font-size: 22px;
        }
        &:last-of-type {
          display: none;
          @include mobile {
            display: block;
          }
        }
      }
    }
  }
}
</style>