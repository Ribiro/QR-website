<template>
  <div class="root">
    <div class="background">
      <div class="gradient">
        <div class="deco-wave" />
        <hidden point="smDown">
          <div class="deco-line" />
        </hidden>
        <div class="deco-inner">
          <canvas id="particle_art_mobile" width="500" height="700" />
          <script type="text/javascript" src="../../static/scripts/particles-spray.js"></script>
        </div>
      </div>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <v-row>
        <v-col md="7" cols="12" class="px-3">
          <div class="text">
            <h3 class="use-text-title">
              Welcome to QRMenu
              <strong>
                Digital Menu System
              </strong>
            </h3>
            <h5 class="use-text-subtitle">
              Its an all-in-one platform to help you upload menus for your customers.
            </h5>
            <div class="btn-area">
              <nuxt-link to="/">
                <img src="../../static/images/mobile/app-store.png" alt="app store" />
                <p>Coming Soon!</p>
              </nuxt-link>
              <a href="https://play.google.com/store/apps/details?id=org.eXpesa.Qrmenu">
                <img src="../../static/images/mobile/play-store.png" alt="play store" />
              </a>
              <div id="watched_counter" />
            </div>
          </div>
        </v-col>
        <v-col md="5" cols="12" class="px-3">
          <div class="decoration">
            <div class="phone-illustration">
              <img :src="imgAPI.mobile[0]" class="phone" alt="illustration" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      link: link,
      imgAPI: imgAPI
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
