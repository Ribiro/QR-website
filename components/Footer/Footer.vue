<template>
  <footer class="footer" :class="{ invert: invert }">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col
          class="pa-4"
          md="3"
          cols="12"
        >
          <div class="logo">
            <img
              :src="logo"
              alt="logo"
            >
            <h6 class="title">
              QRMenu
            </h6>
          </div>
          <p class="body-2 text-center" v-if="isDesktop">
            &copy;&nbsp;
            {{ new Date().getFullYear() }} — QRMenu
          </p>
        </v-col>
        <v-col
          class="px-6 py-0"
          md="6"
          cols="12"
        >
          <v-expansion-panels
            v-if="isMobile"
            :dark="!invert"
            class="accordion-root"
          >
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <strong class="mb-4">
                  {{ footer.title }}
                </strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                  >
                    <a :href="footer.link[index]">{{ item }}</a>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"
              class="px-4 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <a :href="footer.link[index]">{{ item }}</a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
            <v-btn
              href="https://web.facebook.com/QRMenu-103658015155669"
              text
              icon
              class="button"

            >
              <span class="ion-social-facebook icon" />
            </v-btn>
            <v-btn
              href="https://twitter.com/DennisRibiro"
              text
              icon
              class="button"
            >
              <span class="ion-social-twitter icon" />
            </v-btn>
            <v-btn
              href="https://instagram.com/"
              text
              icon
              class="button"
            >
              <span class="ion-social-instagram icon" />
            </v-btn>
            <v-btn
              href="https://www.linkedin.com/"
              text
              icon
              class="button"
            >
              <span class="ion-social-linkedin icon" />
            </v-btn>
          </div>
          <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
            @change="switchLang(lang)"
          />
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;
        {{ new Date().getFullYear() }} — QRMenu
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/QR LOGO.png'
import brand from '~/static/text/brand'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'Recommended Scanning Apps',
        description: ['Android', 'iOS'],
        link: [
          'https://play.google.com/store/apps/details?id=com.maqr.barcode.free.qrandbarcodescanner.mavach.qrcode.reader.qrcodereader.qrcodescanner.quickbarecodescanner',
          'https://apps.apple.com/ke/app/qr-code-qr-reader-scanner/id1180506724'
        ]
      },
      {
        title: 'Contacts',
        description: ['0715785748', '0758513955', '0727802446'],
        link: ['#', '#', '#']
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use', 'License'],
        link: [
          'https://superqrmenu.co.ke/privacy',
          'https://superqrmenu.co.ke/privacy',
          'https://superqrmenu.co.ke/license'
        ]
      }
    ]
  }),
  props: {
    invert: {
      type: Boolean,
      default: false
    }
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
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
