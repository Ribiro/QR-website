  <template>
  <div class="root">
    <u-animate-container>
      <u-animate
        :offset="-50"
        name="fadeInUpShort"
        delay="0.3s"
        duration="0.5s"
      >
        <div>
          <title-main align="center">
            {{ $t('mobileLanding.testimonial_title') }}
          </title-main>
        </div>
      </u-animate>
      <div class="carousel-wrap">
        <u-animate
          :offset="-150"
          name="fadeInUpShort"
          delay="0.4s"
          duration="0.5s"
        >
          <div>
            <v-container class="max-sm">
              <div class="carousel-text" v-if="loaded">
                <slick class="slider-text" ref="sliderText" :options="settingsText">
                  <div
                    v-for="(item, index) in testiContent"
                    :key="index"
                    class="item"
                  >
                    <p class="content">
                      {{ item.text }}
                    </p>
                    <p class="name">
                      <strong>{{ item.name }}</strong>
                      -
                      {{ item.title }}
                    </p>
                  </div>
                </slick>
              </div>
            </v-container>
            <div class="carousel-avatar" v-if="loaded">
              <slick class="slider-avatar" ref="sliderAvatar" :options="settingsAvatar">
                <div
                  v-for="(item, index) in testiContent"
                  :key="index"
                  class="item"
                >
                  <v-avatar class="avatar">
                    <img
                      :alt="item.name"
                      :src="item.avatar"
                    >
                  </v-avatar>
                </div>
              </slick>
            </div>
          </div>
        </u-animate>
      </div>
      <div class="deco-bg-bottom" />
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'
import Title from '../Title'

const testiContent = [
  {
    text:
      'The web app is well engineered to meet the needs of the customers. Give it a try and you wont regret',
    avatar: imgAPI.avatar[0],
    name: 'Ribiro',
    title: 'Web Developer'
  },
  {
    text:
      'The hotel/resturant/club owners are well covered as well. the mobile app is well engineered to ensure easy uploading on menus.',
    avatar: imgAPI.avatar[1],
    name: 'Eric',
    title: 'Mobile Developer'
  },
  {
    text:
      'Its one of a kind, going to change the lives of many around the globe. Qrmenu has incredible services that nobody wishes to miss. The app is AI-driven and makes no mistakes. It sends the right traffic to your business and your needs. Install this digital app and change the way you market your products.',
    avatar: imgAPI.avatar[2],
    name: "Henry Gathong'a",
    title: 'Research and Data Analyst'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[3],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[4],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[5],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[6],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[7],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[8],
    name: 'Name',
    title: 'title'
  },
  {
    text: 'Testimonial goes here...',
    avatar: imgAPI.avatar[9],
    name: 'Name',
    title: 'title'
  }
]

export default {
  components: {
    Hidden,
    'title-main': Title,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiContent,
      settingsText: {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        asNavFor: '.slider-avatar'
      },
      settingsAvatar: {
        dots: false,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        centerPadding: '2px',
        centerMode: true,
        autoplaySpeed: 5000,
        slidesToShow: 7,
        pauseOnHover: false,
        arrows: false,
        asNavFor: '.slider-text',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
