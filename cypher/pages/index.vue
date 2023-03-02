<template>
  <div class="top-page">
    <div class="top-section"></div>
    <transition>
      <section class="concept-section" data-concept="01">
        <div class="c-inner">
          <div class="-details">
            <h2>内装解体をデザインする</h2>
            <p>
              母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が
            </p>
            <div class="link">
              <nuxt-link to="#">read more</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </transition>
    <transition>
      <section class="concept-section" data-concept="02">
        <div class="c-inner">
          <div class="-details">
            <h2>予算もデザインする</h2>
            <p>私たちは</p>
            <div class="link">
              <nuxt-link to="#">read more</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </transition>
    <section class="concept-section" data-concept="03">
      <div class="c-inner">
        <div class="-details">
          <h2>情報技術とデザインと思想</h2>
          <p>私たちは</p>
          <div class="link">
            <nuxt-link to="#">read more</nuxt-link>
          </div>
        </div>
        <div class="img">
          <img src="@/assets/svg/mark.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="concept-section" data-concept="other">
      <div class="c-inner">
        <div class="-details">
          <div class="item">
            <nuxt-link to="#">
              <h3>建築の流れ</h3>
              <img src="@/assets/img/flow-img.png" alt="" />
              <p>
                CYPHERは、企画・デザイン・設計・施工・アフターメンテナンスまで一貫して携わりながら、情報技術の負荷価値もご提供していきます。
              </p>
            </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="#">
              <h3>過去の事例</h3>
              <img src="@/assets/img/jirei-img.png" alt="" />
              <p>
                情報技術とデザイン思想を結び付けたCYPHERの事例をご覧ください。
              </p>
            </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="#">
              <h3>お問合せ・お見積</h3>
              <img src="@/assets/img/contact-img.png" alt="" />
              <p>CYPHERへのアクセスとなります。</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="news-section">
      <div class="c-inner">
        <h3 class="news-section__title">NEWS</h3>
        <div class="news-section__box">
          <ul class="news-list">
            <li v-for="(page, key) in newsList" :key="key">
              <nuxt-link :to="page.to">
                <div class="img">
                  <img :src="page.src" alt="" />
                </div>
                <div class="content">
                  <span class="date">{{ page.date }}</span>
                  <h4 class="title">{{ page.title }}</h4>
                  <p class="text">{{ page.text }}</p>
                </div>
              </nuxt-link>
            </li>
          </ul>
          <div class="more">
            <nuxt-link to="https://nuxtjs.org"> READ MORE </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<script >
export default {
  setup() {
    const newsList = reactive([
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
    ]);
    return { newsList };
  },
};
</script>

<style lang="scss" scoped>
.top {
  &-section {
    width: 100%;
    height: 800px;
    background-image: url("@/assets/img/kv-img01.png");
    background-size: cover;
  }
}
.concept {
  &-section {
    height: 950px;
    margin-block-end: 70px;

    .c-inner {
      display: flex;
    }
    &[data-concept="01"] {
      background: url("@/assets/img/sec-img01.png") no-repeat center center /
        cover;
    }
    &[data-concept="02"] {
      background: url("@/assets/img/sec-img02.png") no-repeat center center /
        cover;
      .c-inner {
        flex-direction: row-reverse;
      }
    }
    &[data-concept="03"] {
      background-color: #756d6d;
    }
    &[data-concept="other"] {
      height: auto;
      .-details {
        display: flex;
        width: 100%;
        gap: 20px;
        margin-block-start: 0;
        .item {
          width: calc(100%);
          a {
            color: $colorText;
            &:hover {
              opacity: 0.7;
            }
          }
          h3 {
            text-align: center;
            margin-block-end: 20px;
          }
          img {
            margin-block-end: 40px;
          }
          p {
            font-size: 14px;
            margin-block-end: 0;
          }
        }
      }
    }
    .-details {
      width: contWidth(750, 1920);
      color: #fff;
      margin-block-start: 150px;
      h2 {
        font-size: 40px;
        margin-block-end: 40px;
      }
      p {
        font-size: 26px;
        margin-block-end: 60px;
      }
      .link {
        text-align: right;
        a {
          color: #fff;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .img {
      width: contWidth(290, 1920);
      margin-inline: auto;
      margin-block-start: 240px;
    }
  }
}
.news {
  &-section {
    margin-block: 80px 80px;
    &__title {
      font-size: 36px;
      text-align: center;
      margin-bottom: 60px;
    }
    &__box {
      margin-inline: 60px;
      border: 1px solid #000;
      padding: 20px;
      @include mobile {
        margin-inline: 0px;
        padding: 15px;
      }
      .more {
        text-align: right;
        a {
          font-size: 20px;
          color: $colorText;
        }
      }
    }
  }

  &-list {
    margin-block-end: 60px;
    li {
      padding: 10px;

      a {
        display: flex;
        gap: 40px;
        color: $colorText;
        @include mobile {
          flex-direction: column;
          gap: 20px;
        }
        &:hover {
          opacity: 0.7;
        }
        img {
          width: 260px;
          @include mobile {
            margin-inline: auto;
          }
        }
      }

      .date {
      }
      .title {
        @include mobile {
          margin-block-end: 20px;
        }
      }
      .text {
      }
    }
  }
}
</style>