<template>
  <div class="home-page">
    <!-- Hero Section -->
    <v-parallax
      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
      height="850"
      class="hero-section"
    >
      <div class="hero-overlay"></div>
      <v-container class="fill-height position-relative" style="z-index: 2;">
        <v-row align="center">
          <v-col cols="12" md="8" lg="6">
            <div class="hero-content">
              <v-chip
                color="secondary"
                class="mb-6 font-weight-bold"
                size="large"
                elevation="2"
              >
                <v-icon start icon="mdi-star" size="small"></v-icon>
                {{ $t('home.hero.chip') }}
              </v-chip>
              <h1 class="text-h2 text-md-h1 font-weight-black white--text mb-6 lh-tight">
                {{ $t('home.hero.title') }}
              </h1>
              <p class="text-h6 white--text opacity-90 mb-8 font-weight-light" style="line-height: 1.6;">
                {{ $t('home.hero.subtitle') }}
              </p>
              <div class="d-flex flex-wrap gap-4">
                <v-btn
                  size="x-large"
                  color="secondary"
                  class="px-8 font-weight-bold cta-button"
                  elevation="4"
                  rounded="pill"
                  to="/contact"
                  height="56"
                >
                  {{ $t('home.hero.ctaPrimary') }}
                  <v-icon end class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn
                  size="x-large"
                  variant="outlined"
                  color="white"
                  class="px-8 font-weight-bold glass-button"
                  rounded="pill"
                  to="/services"
                  height="56"
                >
                  {{ $t('home.hero.ctaSecondary') }}
                </v-btn>
              </div>
              
              <div class="mt-12 d-flex align-center gap-4 text-white">
                <div class="d-flex">
                  <v-avatar size="40" class="border-2 border-white" style="margin-right: -12px;">
                    <v-img src="https://randomuser.me/api/portraits/women/44.jpg"></v-img>
                  </v-avatar>
                  <v-avatar size="40" class="border-2 border-white" style="margin-right: -12px;">
                    <v-img src="https://randomuser.me/api/portraits/men/32.jpg"></v-img>
                  </v-avatar>
                  <v-avatar size="40" class="border-2 border-white" style="margin-right: -12px;">
                    <v-img src="https://randomuser.me/api/portraits/women/68.jpg"></v-img>
                  </v-avatar>
                  <v-avatar size="40" color="secondary" class="border-2 border-white text-subtitle-2 font-weight-bold text-primary">
                    +5k
                  </v-avatar>
                </div>
                <div class="d-flex flex-column">
                  <div class="d-flex align-center">
                    <v-icon color="secondary" size="small">mdi-star</v-icon>
                    <v-icon color="secondary" size="small">mdi-star</v-icon>
                    <v-icon color="secondary" size="small">mdi-star</v-icon>
                    <v-icon color="secondary" size="small">mdi-star</v-icon>
                    <v-icon color="secondary" size="small">mdi-star</v-icon>
                  </div>
                  <span class="text-caption font-weight-medium opacity-80">5000+ {{ $t('home.hero.happyStudents') }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <!-- Statistics Section (Floating) -->
    <v-container class="mt-n16 position-relative" style="z-index: 3;">
      <v-card elevation="6" rounded="xl" class="overflow-hidden stats-card">
        <v-row no-gutters>
          <v-col
            v-for="(stat, index) in statistics"
            :key="index"
            cols="6"
            md="3"
            class="stats-col pa-6 pa-md-8 text-center"
            :class="{'border-right': index !== statistics.length - 1}"
          >
            <div class="stat-icon-wrapper mb-4 mx-auto">
              <v-icon size="32" color="primary">{{ stat.icon }}</v-icon>
            </div>
            <h3 class="text-h4 font-weight-black primary--text mb-1">{{ stat.value }}</h3>
            <p class="text-body-2 text-grey-darken-1 font-weight-medium text-uppercase ls-1">{{ $t(stat.label) }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <!-- Why Choose Us -->
    <v-container class="py-16 mt-8">
      <div class="text-center mb-16 px-4">
        <span class="text-overline text-primary font-weight-bold mb-2 d-block ls-2">{{ $t('home.whyUs.overline') }}</span>
        <h2 class="text-h3 font-weight-bold text-grey-darken-4 mb-4">
          {{ $t('home.whyUs.title') }}
          <span class="text-primary position-relative inline-block">
            <svg class="wavy-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
          </span>
        </h2>
        <p class="text-h6 text-grey font-weight-regular mx-auto" style="max-width: 700px;">
          {{ $t('home.whyUs.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          cols="12"
          md="4"
          class="pa-4"
        >
          <v-card
            class="feature-card h-100 pa-6 transition-swing"
            elevation="0"
            border
          >
            <div class="d-flex flex-column h-100">
              <div class="feature-icon mb-6">
                <v-icon size="40" :color="feature.color">{{ feature.icon }}</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold mb-3">{{ $t(feature.title) }}</h3>
              <p class="text-body-1 text-grey-darken-1 mb-6 flex-grow-1" style="line-height: 1.7;">
                {{ $t(feature.description) }}
              </p>
              <v-btn variant="text" :color="feature.color" class="px-0 align-self-start font-weight-bold">
                {{ $t('common.readMore') }}
                <v-icon end size="small">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Programs/Services -->
    <div class="bg-grey-lighten-5 py-16 position-relative overflow-hidden">
      <!-- Decorative circles -->
      <div class="circle-decoration circle-1"></div>
      <div class="circle-decoration circle-2"></div>
      
      <v-container class="position-relative" style="z-index: 2;">
        <div class="d-flex flex-column flex-md-row justify-space-between align-md-end mb-12 px-4">
          <div class="mb-6 mb-md-0">
            <span class="text-overline text-primary font-weight-bold mb-2 d-block ls-2">{{ $t('home.programs.overline') }}</span>
            <h2 class="text-h3 font-weight-bold text-grey-darken-4">
              {{ $t('home.programs.title') }}
            </h2>
          </div>
          <v-btn color="primary" variant="outlined" rounded="pill" size="large" to="/services">
            {{ $t('home.programs.viewAll') }}
          </v-btn>
        </div>

        <v-slide-group show-arrows class="program-slider pb-4">
          <v-slide-group-item
            v-for="(service, index) in services"
            :key="index"
            v-slot="{ toggle }"
          >
            <v-card
              width="350"
              class="ma-4 rounded-xl service-card overflow-hidden"
              elevation="2"
              @click="toggle"
            >
              <div class="img-wrapper">
                <v-img
                  :src="service.image"
                  height="220"
                  cover
                  class="zoom-effect"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="img-overlay"></div>
                  <v-chip
                    :color="service.color"
                    class="service-chip font-weight-bold text-uppercase"
                    size="small"
                  >
                    {{ $t('home.programs.cardTag') }}
                  </v-chip>
                </v-img>
              </div>
              
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <v-icon size="24" :color="service.color" class="mr-2">{{ service.icon }}</v-icon>
                  <div class="text-caption text-uppercase font-weight-bold text-grey">{{ $t('home.programs.certified') }}</div>
                </div>
                <h3 class="text-h5 font-weight-bold mb-2 text-truncate">{{ $t(service.title) }}</h3>
                <p class="text-body-2 text-grey mb-4 line-clamp-2" style="min-height: 44px;">
                  {{ $t(service.description) }}
                </p>
                <v-divider class="mb-4"></v-divider>
                <div class="d-flex justify-space-between align-center">
                  <span class="text-caption font-weight-medium text-grey">{{ $t('home.programs.details') }}</span>
                  <v-btn icon density="comfortable" variant="tonal" :color="service.color" size="small">
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-container>
    </div>

    <!-- CTA Section -->
    <v-container class="py-16 my-8">
      <v-card
        color="primary"
        theme="dark"
        rounded="xl"
        class="overflow-hidden position-relative pa-8 pa-md-16"
        elevation="10"
      >
        <div class="cta-pattern"></div>
        <v-row align="center">
          <v-col cols="12" md="8">
            <h2 class="text-h3 font-weight-black mb-4">{{ $t('home.cta.title') }}</h2>
            <p class="text-h6 opacity-90 font-weight-regular mb-8" style="max-width: 600px;">
              {{ $t('home.cta.description') }}
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn
                size="large"
                color="white"
                class="text-primary font-weight-bold px-8"
                rounded="pill"
                href="#"
              >
                {{ $t('home.cta.startExam') }}
                <v-icon end>mdi-clock-outline</v-icon>
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                color="white"
                class="px-8"
                rounded="pill"
                to="/contact"
              >
                {{ $t('home.cta.callUs') }}
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="d-none d-md-flex justify-end">
            <v-icon size="200" color="white" style="opacity: 0.1; transform: rotate(-15deg);">mdi-clipboard-text-outline</v-icon>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@unhead/vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    useHead({
      title: 'Cyprus Language School - Kıbrıs\'ın En İyi Dil Okulu',
      meta: [
        {
          name: 'description',
          content: 'Kıbrıs\'ta İngilizce, Rusça ve Türkçe dil eğitimi. Lefkoşa\'nın merkezinde, uzman kadro ve modern eğitim metotları ile yabancı dil öğrenin.'
        },
        {
          name: 'keywords',
          content: 'Kıbrıs dil okulu, Lefkoşa İngilizce kursu, Kıbrıs Rusça eğitimi, yabancılar için Türkçe, IELTS hazırlık Kıbrıs'
        }
      ]
    })
  },
  data() {
    return {
      features: [
        {
          icon: 'mdi-account-tie',
          title: 'features.teacher.title',
          description: 'features.teacher.desc',
          color: 'primary'
        },
        {
          icon: 'mdi-laptop-school',
          title: 'features.method.title',
          description: 'features.method.desc',
          color: 'secondary'
        },
        {
          icon: 'mdi-certificate-outline',
          title: 'features.certificate.title',
          description: 'features.certificate.desc',
          color: 'success'
        }
      ],
      services: [
        {
          icon: 'mdi-translate',
          title: 'courses.generalEnglish',
          description: 'courses.generalEnglishDesc',
          color: 'primary',
          image: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-school',
          title: 'courses.academicExams',
          description: 'courses.academicExamsDesc',
          color: 'error',
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-chat-processing',
          title: 'courses.speakingClub',
          description: 'courses.speakingClubDesc',
          color: 'success',
          image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-briefcase',
          title: 'courses.businessEnglish',
          description: 'courses.businessEnglishDesc',
          color: 'info',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-airplane',
          title: 'courses.studyAbroad',
          description: 'courses.studyAbroadDesc',
          color: 'warning',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&w=400'
        }
      ],
      statistics: [
        { icon: 'mdi-account-group', value: '5000+', label: 'home.stats.graduates' },
        { icon: 'mdi-teach', value: '50+', label: 'home.stats.teachers' },
        { icon: 'mdi-trophy-variant', value: '%98', label: 'home.stats.satisfaction' },
        { icon: 'mdi-domain', value: '3', label: 'home.stats.campus' }
      ]
    }
  }
})
</script>

<style scoped>
.lh-tight {
  line-height: 1.1;
}

.ls-1 {
  letter-spacing: 1px;
}

.ls-2 {
  letter-spacing: 2px;
}

.text-gradient-gold {
  background: linear-gradient(120deg, #ffd700, #ffca28, #ff8f00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-section {
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(26, 35, 126, 0.9) 0%, rgba(26, 35, 126, 0.6) 50%, rgba(26, 35, 126, 0.2) 100%);
  z-index: 1;
}

.glass-button {
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.stats-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stats-col:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}

@media (max-width: 960px) {
  .stats-col:nth-child(odd) {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }
  .stats-col:nth-child(2) {
    border-right: none;
  }
}

.stat-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(26, 35, 126, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stats-col:hover .stat-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: rgba(26, 35, 126, 0.1);
}

.feature-card {
  background: white;
  border-color: rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
  border-color: transparent;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: var(--v-theme-primary);
  color: white !important;
}

.feature-card:hover .feature-icon .v-icon {
  color: white !important;
}

.service-card {
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.img-wrapper {
  position: relative;
  overflow: hidden;
}

.zoom-effect {
  transition: transform 0.5s ease;
}

.service-card:hover .zoom-effect {
  transform: scale(1.1);
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
  opacity: 0.6;
}

.service-chip {
  position: absolute;
  top: 16px;
  left: 16px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cta-pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.3;
}

.circle-decoration {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.05), rgba(255, 202, 40, 0.05));
  z-index: 1;
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 300px;
  height: 300px;
  bottom: 50px;
  left: -50px;
}

.gap-4 {
  gap: 1rem;
}
</style>