<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <title-main :align="isMobile ? 'center' : 'left'">
            <strong>
              FAQ
            </strong>
          </title-main>
          <p
            class="text use-text-subtitle2"
            :class="[isMobile ? 'text-center' : 'text-left']"
          >
            {{ $t('mobileLanding.faq_subtitle') }}
          </p>
          <div class="illustration">
            <svg class="deco-primary">
              <use xlink:href="/images/mobile/deco-feature.svg#main" />
            </svg>
            <parallax-extra-small />
            <img src="/images/mobile/faq.png" alt="illustration" />
          </div>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              active-class="expanded"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="paper"
              >
                 <v-expansion-panel-header class="content">
                  <span class="heading">
                    {{ item.q }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <span>
                    {{ item.a }}
                  </span>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import ParallaxExtraSmall from '../Parallax/ExtraSmall'
import Title from '../Title'

const faqData = [
  {
    q: 'Where is QRMenu applicable?',
    a:
      'Feel free to use the app for hotels, eateries, restaurants, clubs, bars, etc'
  },
  {
    q: 'When is the iOS app coming out?',
    a:
      'Development is still underway, we will notify you once it is completed. '
  },
  {
    q: 'Do you have a free trial?',
    a: 'Yes. You can use the app for free for 30 days. '
  },
  {
    q: 'What happens when the free trial is over?',
    a: 'You have to subscribe to continue using the QRMenu services. '
  },
  {
    q: 'How much to pay after the free trial?',
    a: 'Ksh.100 monthly, or Ksh. 1000 for a whole year '
  }
]

export default {
  components: {
    Hidden,
    ParallaxExtraSmall,
    'title-main': Title
  },
  data() {
    return {
      panel: 0,
      faqData: faqData
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
