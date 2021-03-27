<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title-main">
            {{ $t('mobileLanding.feature_video') }}
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt.use">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <title-main align="center">
      Features
    </title-main>
    <v-container class="fixed-width">
      <div class="item first">
        <v-row :class="[isMobile ? 'column-reverse' : 'row']">
          <v-col cols="12" md="6" class="py-0">
            <div class="illustration-left">
              <svg class="deco-primary">
                <use xlink:href="/images/mobile/deco-feature.svg#main" />
              </svg>
              <parallax-small />
              <figure class="screen">
                <img :src="imgAPI.new[0]" alt="illustration" />
              </figure>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="py-0">
            <div class="text">
              <title-secondary
                :align="isMobile ? 'center' : 'left'"
                text="Create Menus Easily"
              />
              <p class="use-text-subtitle2">
                QRMenu eliminates the phyiscal menu system. Create your menus and update them with ease.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="bg-color">
      <div class="deco-bg-top" />
      <v-container class="fixed-width">
        <div class="item">
          <v-row>
            <v-col md="6" cols="12" class="py-0">
              <div class="text">
                <title-secondary
                  text="Generate Scannable QR Code"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p class="use-text-subtitle2">
                  Generate a QR Code to help customers scan to your menus. Provides better customer experience.
                </p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="py-0">
              <div class="illustration-right">
                <svg class="deco-secondary">
                  <use xlink:href="/images/mobile/deco-feature.svg#main" />
                </svg>
                <parallax-small />
                <figure class="screen">
                  <img :src="imgAPI.new[1]" alt="screen" />
                </figure>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <title-secondary align="center" :text="$t('mobileLanding.feature_title3')" />
          <p class="text-center use-text-subtitle2">
            {{ $t('mobileLanding.feature_desc3') }}
          </p>
          <v-container class="max-sm pa-0">
            <v-row>
              <v-col sm="12" cols="12" class="py-0">
                <div class="illustration-center">
                  <svg class="deco-primary-big">
                    <use xlink:href="/images/mobile/deco-feature.svg#main" />
                  </svg>
                  <parallax-medium />
                  <v-card class="video">
                    <img :src="imgAPI.new[2]" alt="screen" />
                    <h6 class="title">
                      {{ $t('mobileLanding.feature_watch') }}
                    </h6>
                    <v-btn icon large class="button" @click="handleVideoOpen()">
                      <i class="ion-play" />
                    </v-btn>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import ParallaxSmall from '../Parallax/Small'
import ParallaxMedium from '../Parallax/Medium'
import Title from '../Title'
import TitleSecondary from '../Title/TitleSecondary'

export default {
  components: {
    ParallaxSmall,
    ParallaxMedium,
    TitleSecondary,
    'title-main': Title
  },
  data() {
    return {
      videoId: 'QFEduQQL9IU',
      imgAPI: imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8006'
      },
      yt: youtube
    }
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
