<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <h1 class="text-h2 text-center white--text">Hizmetlerimiz</h1>
      </v-container>
    </v-container>

    <!-- Services Content -->
    <v-container class="py-16">
      <v-row>
        <v-col
            v-for="(service, index) in services"
            :key="index"
            cols="12"
            md="6"
            class="mb-6"
        >
          <v-card class="h-100">
            <v-card-title class="bg-primary text-white">
              <v-icon class="mr-2">{{ service.icon }}</v-icon>
              {{ service.title }}
            </v-card-title>
            <v-card-text class="pa-6">
              <p class="mb-4">{{ service.description }}</p>
              <v-list density="compact">
                <v-list-item
                    v-for="(feature, idx) in service.features"
                    :key="idx"
                    class="pl-0"
                >
                  <template v-slot:prepend>
                    <v-icon color="success">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>{{ feature }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <div class="mt-4" v-if="service.duration || service.level">
                <v-chip
                    v-if="service.duration"
                    color="primary"
                    variant="outlined"
                >
                  {{ service.duration }}
                </v-chip>
                <v-chip
                    v-if="service.level"
                    color="secondary"
                    variant="outlined"
                    class="ml-2"
                >
                  {{ service.level }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  color="primary"
                  variant="text"
                  block
                  @click="navigateToService(service.route)"
              >
                Detaylı Bilgi Al
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          icon: 'mdi-alphabetical',
          title: 'İngilizce Kursları',
          description: 'Başlangıçtan ileri seviyeye kadar tüm seviyelerde İngilizce eğitimi',
          features: [
            'Okul Öncesi İngilizce',
            'İlkokul İngilizce',
            'Kolej Giriş Sınavlarına Hazırlık',
            'Ortaokul İngilizce',
            'Lise İngilizce',
            'Yetişkin İngilizce',
          ],
          duration: '3-6 Ay',
          level: 'Tüm Seviyeler',
          route: '/services/english-courses'
        },
        {
          icon: 'mdi-certificate',
          title: 'Uluslararası Sınavlar',
          description: 'Güçlü kadro, bire bir takip, deneme sınavları',
          features: [
            'IGCSE Cambridge',
            'IDCSE Edexcel',
            'Pearson',
            'PTE',
            'IELTS'
          ],
          duration: '4-8 Ay',
          level: 'A1-C1',
          route: '/services/international-exams'
        },
        {
          icon: 'mdi-airplane',
          title: 'Yurt Dışı Eğitim & Programlar',
          description: 'Uluslararası eğitim fırsatları ve yaz kampları',
          features: [
            'Yaz kampları / Summer Schools',
            'Ebeveynli yaz kampları',
            '18+ dil okulları (3–5 hafta veya daha uzun süreli programlar)',
          ],
          duration: '3-8 Hafta',
          level: 'Tüm Yaşlar',
          route: '/services/abroad-programs'
        },
        {
          icon: 'mdi-school-outline',
          title: 'Yurt Dışı Eğitim Danışmanlığı',
          description: 'Profesyonel üniversite yerleştirme danışmanlığı',
          features: [
            'Üniversite ve bölüm seçimi',
            'Yerleştirme süreci',
            'Ülke bazlı rehberlik (Hollanda, İngiltere, Almanya vb.)',
            'Doğru ülke, doğru üniversite, doğru bölüm rehberliği',
          ],
          duration: 'Esnek',
          level: 'Lise ve Üzeri',
          route: '/services/education-consulting'
        }
      ]
    }
  },
  methods: {
    navigateToService(route: string) {
      this.$router.push(route)
    }
  }
})
</script>