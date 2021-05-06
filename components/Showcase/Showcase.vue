<template>
  <div class="root">
    <svg class="deco-top back">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <svg class="deco-top cover">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <title-main dark align="center">
      {{ $t('mobileLanding.showcase_title') }}
    </title-main>
    <div class="carousel-wrap" v-if="loaded">
      <div class="invert-parallax">
        <parallax-large />
      </div>
      <div class="carousel-side">
        <slick
          :options="settingsSide"
          class="slider-side"
          ref="sliderSide"
        >
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[0]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[1]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[2]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[3]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[4]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[5]" alt="app" />
            </v-card>
          </div>
          <div class="item">
            <v-card class="frame">
              <img :src="imgAPI.updated[6]" alt="app" />
            </v-card>
          </div>
<!--          <div class="item">-->
<!--            <v-card class="frame">-->
<!--              <img :src="imgAPI.updated[12]" alt="app" />-->
<!--            </v-card>-->
<!--          </div>-->
<!--          <div class="item">-->
<!--            <v-card class="frame">-->
<!--              <img :src="imgAPI.updated[4]" alt="app" />-->
<!--            </v-card>-->
<!--          </div>-->
        </slick>
      </div>
      <div class="carousel-center">
        <v-card class="frame">
          <slick
            :options="settingsCenter"
            class="slider-center"
            ref="sliderCenter"
            @afterChange="handleActiveSlide"
          >
            <div class="item">
              <img :src="imgAPI.updated[0]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[15]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[1]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[16]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[2]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[17]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[3]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[18]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[4]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[19]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[5]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[19]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[6]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[20]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[3]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[20]" alt="app" />-->
<!--              </div>-->
            </div>
            <div class="item">
              <img :src="imgAPI.updated[4]" alt="app" />
<!--              <div class="widget">-->
<!--                <img :src="imgAPI.mobile[20]" alt="app" />-->
<!--              </div>-->
            </div>
          </slick>
        </v-card>
      </div>
    </div>
    <svg class="deco-bottom back">
      <use xlink:href="/images/mobile/deco-wave-bottom.svg#main" />
    </svg>
    <svg class="deco-bottom cover">
      <use xlink:href="/images/mobile/deco-wave-bottom.svg#main" />
    </svg>
    <div class="deco-bottom-mobile" />
    <div class="pagination">
      <ul>
        <li
          v-for="index in 7"
          :key="index"
          :class="{ active: activeSlide === index }"
        >
          <button type="button" @click="handleDotsNav(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './showcase-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ParallaxLarge from '../Parallax/Large'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    ParallaxLarge,
    Slick: () => import('vue-slick')
  },
  data: () => ({
    imgAPI: imgAPI,
    loaded: false,
    activeSlide: 0,
    settingsCenter: {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      asNavFor: '.slider-side'
    },
    settingsSide: {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 5,
      arrows: false,
      asNavFor: '.slider-center',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    }
  }),
  mounted() {
    this.loaded = true
  },
  methods: {
    handleDotsNav(index) {
      this.$refs.sliderCenter.goTo(index)
    },
    handleActiveSlide(event, slick, currentSlide) {
      this.activeSlide = currentSlide
    }
  }
}
</script>
