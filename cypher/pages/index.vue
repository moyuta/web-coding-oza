<template>
  <div class="top-page">
    <div class="top-section"></div>
    <div class="news-section">
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
    </div>
  </div>
</template>

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
      .more {
        text-align: right;
        font-size: 20px;
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
        &:hover {
          opacity: 0.7;
        }
        img {
          width: 260px;
        }
      }
      .content {
      }
      .date {
      }
      .title {
      }
      .text {
      }
    }
  }
}
</style>