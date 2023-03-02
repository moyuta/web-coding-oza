<template>
  <div class="slider-inner">
    <Carousel @slide-start="slideFunction" ref="myCarousel">
      <Slide v-for="(image, key) in images" :key="key">
        <img :src="image" alt="" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="gallery">
      <button
        v-for="(image, key) in images"
        :key="key"
        :class="key == currentPage ? 'focused-img' : 'non-focused-img'"
      >
        <img :src="image" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const myCarousel = ref(null);
const currentPage = ref(0);
const props = defineProps({
  images: {
    type: Array,
    default: null,
  },
});
const slideFunction = ({ slidingToIndex }) => {
  currentPage.value = slidingToIndex;
};
</script>

<style lang="scss" scoped>
img {
  height: 300px;
  width: 500px;
}
.gallery {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  justify-content: center;
  img {
    height: 80px;
    width: 120px;
  }
  button: {
    background: #fff;
  }
  .focused-img {
    border: 1px solid red;
    background: #fff;
  }
  .non-focused-img {
    border: none;
    background: #fff;
  }
}
</style>