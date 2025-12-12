<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <h1 class="text-h2 text-center white--text">Hakkımızda</h1>
      </v-container>
    </v-container>

    <!-- About Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
              height="400"
              cover
              class="rounded-lg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="text-h4 mb-4">15 Yıllık Tecrübe ile Yanınızdayız</h2>
          <p class="text-body-1 mb-4">
            Kıbrıs Dil Okulu olarak, 2009 yılından bu yana binlerce öğrenciye kaliteli dil eğitimi sunuyoruz.
            Uzman kadromuz ve modern eğitim metodlarımızla, öğrencilerimizin dil öğrenme yolculuğunda
            en iyi sonuçları almalarını sağlıyoruz.
          </p>
          <p class="text-body-1 mb-4">
            İngilizce, Rusça ve Türkçe dillerinde verdiğimiz eğitimlerle, öğrencilerimizin akademik ve
            profesyonel hayatlarında başarılı olmalarına katkı sağlıyoruz. Modern tesislerimiz ve
            interaktif öğretim yöntemlerimizle fark yaratıyoruz.
          </p>
          <v-btn color="primary" size="large" @click="$router.push('/contact')">
            Bize Ulaşın
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Mission Vision Values -->
      <v-row class="mt-16">
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center h-100">
            <v-icon size="64" color="primary" class="mb-4">mdi-target</v-icon>
            <h3 class="text-h5 mb-3">Misyonumuz</h3>
            <p>
              Öğrencilerimize en kaliteli dil eğitimini sunarak, onların akademik ve profesyonel
              hayatlarında başarılı olmalarını sağlamak.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center h-100">
            <v-icon size="64" color="secondary" class="mb-4">mdi-eye</v-icon>
            <h3 class="text-h5 mb-3">Vizyonumuz</h3>
            <p>
              Kıbrıs'ın en tercih edilen ve uluslararası standartlarda eğitim veren
              dil okulu olmak.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center h-100">
            <v-icon size="64" color="success" class="mb-4">mdi-heart</v-icon>
            <h3 class="text-h5 mb-3">Değerlerimiz</h3>
            <p>
              Kalite, güven, yenilikçilik ve öğrenci odaklı yaklaşım ile
              sürekli gelişim.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@unhead/vue'

export default defineComponent({
  name: 'AboutPage',
  setup() {
    useHead({
      title: 'Hakkımızda - Cyprus Language School',
      meta: [
        {
          name: 'description',
          content: 'Kıbrıs Dil Okulu olarak 2009 yılından beri Lefkoşa\'da İngilizce, Rusça ve Türkçe eğitimi veriyoruz. Uzman kadromuzla tanışın.'
        }
      ]
    })
  }
})
</script>