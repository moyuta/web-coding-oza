<template>
  <div class="l-header">
    <button class="menu-btn is-sp">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="nav">
      <div class="nav-inner">
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
        <div class="nav-sns is-sp">
          <a href="" class="nav-sns__icon">
            <img src="@/assets/svg/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="" class="nav-sns__icon">
            <img src="@/assets/svg/icon-instagram.svg" alt="instagram" />
          </a>
          <a href="" class="nav-sns__icon">
            <img src="@/assets/svg/icon-pintarest.svg" alt="pintarest" />
          </a>
        </div>
      </div>
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
    padding-block-start: 30px;
  }
  @include mobile {
    background-color: #fff;
    position: relative;
    // height: 100vh;

    .menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      position: absolute;
      right: 20px;
      top: 15px;
      background-color: #f00;
      cursor: pointer;
      & > * + * {
        margin-block-start: 5px;
      }
      span {
        display: inline-block;
        width: 30px;
        height: 4px;
        background-color: #666;
      }
    }
  }

  .nav {
    @include mobile {
      padding-block-start: 65px;
      padding-block-end: 25px;
      &-inner {
        border: 1px solid $colorText;
        margin-inline: 20px;
        padding-inline: 30px;
      }
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
        @include mobile {
          margin-block-start: 30px;
        }
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
    &-sns {
      display: flex;
      justify-content: center;
      margin-block-start: 30px;
      margin-block-end: 60px;
      & > * + * {
        margin-inline-start: 30px;
      }
      a {
        display: block;
        width: 70px;
      }
    }
  }
}
</style>