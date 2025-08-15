<template>
  <div>
    <!-- Hero Section -->
    <v-parallax
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
        height="600"
        cover
    >
      <div class="d-flex flex-column fill-height justify-center align-center">
        <h1 class="text-h2 text-md-h1 font-weight-bold white--text text-center mb-4">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-h6 white--text text-center mb-6">
          {{ $t('hero.subtitle') }}
        </p>
        <div>
          <v-btn
              size="x-large"
              color="secondary"
              rounded="pill"
              class="mr-4"
              @click="$router.push('/contact')"
          >
            {{ $t('hero.cta') }}
          </v-btn>
          <v-btn
              size="x-large"
              variant="outlined"
              color="white"
              rounded="pill"
          >
            {{ $t('hero.learnMore') }}
          </v-btn>
        </div>
      </div>
    </v-parallax>

    <!-- Features Section -->
    <v-container class="py-16">
      <h2 class="text-h3 text-center mb-12">{{ $t('features.title') }}</h2>
      <v-row>
        <v-col
            v-for="(feature, index) in features"
            :key="index"
            cols="12"
            md="4"
        >
          <v-card class="text-center pa-6 h-100" elevation="0" hover>
            <v-icon
                size="64"
                :color="feature.color"
                class="mb-4"
            >
              {{ feature.icon }}
            </v-icon>
            <h3 class="text-h5 mb-3">{{ $t(feature.title) }}</h3>
            <p class="text-body-1">{{ $t(feature.description) }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h2 class="text-h3 text-center mb-12">Hizmetlerimiz</h2>
        <v-row>
          <v-col
              v-for="(service, index) in services"
              :key="index"
              cols="12"
              sm="6"
              lg="3"
          >
            <v-card class="h-100">
              <v-img
                  :src="service.image"
                  height="200"
                  cover
              ></v-img>
              <v-card-title class="text-center">
                <v-icon :color="service.color" class="mr-2">{{ service.icon }}</v-icon>
                {{ service.title }}
              </v-card-title>
              <v-card-text>
                <p>{{ service.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    color="primary"
                    variant="text"
                    block
                    @click="$router.push('/services')"
                >
                  Detaylı Bilgi
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Statistics Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col
              v-for="(stat, index) in statistics"
              :key="index"
              cols="6"
              md="3"
              class="text-center"
          >
            <v-icon size="48" color="white" class="mb-3">{{ stat.icon }}</v-icon>
            <h2 class="text-h3 font-weight-bold white--text">{{ stat.value }}</h2>
            <p class="text-body-1 white--text">{{ stat.label }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- CTA Section -->
    <v-container class="py-16 text-center">
      <h2 class="text-h3 mb-4">Dil Öğrenme Yolculuğunuza Başlayın</h2>
      <p class="text-h6 text-grey-darken-1 mb-8">
        Profesyonel eğitmenlerimiz ve modern öğretim metodlarımızla hedeflerinize ulaşın
      </p>
      <v-btn
          size="x-large"
          color="primary"
          rounded="pill"
          @click="$router.push('/contact')"
      >
        Ücretsiz Danışmanlık Al
        <v-icon end>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      features: [
        {
          icon: 'mdi-account-group',
          title: 'features.teacher.title',
          description: 'features.teacher.desc',
          color: 'primary'
        },
        {
          icon: 'mdi-laptop',
          title: 'features.method.title',
          description: 'features.method.desc',
          color: 'secondary'
        },
        {
          icon: 'mdi-certificate',
          title: 'features.certificate.title',
          description: 'features.certificate.desc',
          color: 'success'
        }
      ],
      services: [
        {
          icon: 'mdi-alphabetical',
          title: 'İngilizce',
          description: 'Başlangıçtan ileri seviyeye tüm kurslar',
          color: 'primary',
          image: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-alphabet-cyrillic',
          title: 'Rusça',
          description: 'Native öğretmenlerle Rusça eğitimi',
          color: 'error',
          image: 'https://images.unsplash.com/photo-1516901121982-4ba280115a36?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-translate',
          title: 'Türkçe',
          description: 'Yabancılar için Türkçe kursları',
          color: 'success',
          image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?ixlib=rb-4.0.3&w=400'
        },
        {
          icon: 'mdi-laptop',
          title: 'Online Eğitim',
          description: 'Canlı online ders imkanı',
          color: 'warning',
          image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&w=400'
        }
      ],
      statistics: [
        { icon: 'mdi-school', value: '5000+', label: 'Mezun Öğrenci' },
        { icon: 'mdi-account-tie', value: '50+', label: 'Uzman Eğitmen' },
        { icon: 'mdi-trophy', value: '%95', label: 'Başarı Oranı' },
        { icon: 'mdi-calendar-check', value: '15', label: 'Yıllık Tecrübe' }
      ]
    }
  }
})
</script>