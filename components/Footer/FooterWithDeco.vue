<template>
  <div class="footer-deco">
    <svg class="deco-top back">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <svg class="deco-top cover">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <div class="decoration" />
    <div class="action">
      <h4 class="use-text-subtitle">
        {{ $t('mobileLanding.footer_text') }}
      </h4>
      <div class="btn-area">
        <nuxt-link to="/">
          <img src="/images/mobile/app-store.png" alt="app store" />
          <p class="white--text">Coming Soon!</p>
        </nuxt-link>
        <a href="https://play.google.com/store/apps/details?id=org.eXpesa.Qrmenu">
          <img src="../../static/images/mobile/play-store.png" alt="play store" />
        </a>
      </div>
    </div>
    <footer-main />
  </div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Footer from './Footer'

export default {
  components: {
    'footer-main': Footer
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  }
}
</script>
