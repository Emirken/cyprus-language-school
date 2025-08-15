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
              <div class="mt-4">
                <v-chip color="primary" variant="outlined">
                  {{ service.duration }}
                </v-chip>
                <v-chip color="secondary" variant="outlined" class="ml-2">
                  {{ service.level }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="text" block>
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
            'Genel İngilizce',
            'Business English',
            'IELTS Hazırlık',
            'TOEFL Hazırlık',
            'Konuşma Kulübü'
          ],
          duration: '3-6 Ay',
          level: 'Tüm Seviyeler'
        },
        {
          icon: 'mdi-alphabet-cyrillic',
          title: 'Rusça Kursları',
          description: 'Native öğretmenlerle Rusça öğrenin',
          features: [
            'Başlangıç Rusça',
            'İleri Seviye Rusça',
            'Rusça Konuşma',
            'İş Rusçası',
            'Rusça Sertifika Programı'
          ],
          duration: '4-8 Ay',
          level: 'A1-C1'
        },
        {
          icon: 'mdi-translate',
          title: 'Türkçe Kursları',
          description: 'Yabancılar için Türkçe eğitimi',
          features: [
            'TÖMER Hazırlık',
            'Günlük Türkçe',
            'Akademik Türkçe',
            'İş Türkçesi',
            'Türkçe Konuşma Atölyesi'
          ],
          duration: '3-6 Ay',
          level: 'A1-C2'
        },
        {
          icon: 'mdi-laptop',
          title: 'Online Eğitim',
          description: 'Evden veya ofisinizden canlı dersler',
          features: [
            'Birebir Online Ders',
            'Grup Online Dersleri',
            'Esnek Ders Saatleri',
            'Kayıtlı Ders İçerikleri',
            'Online Sınav Hazırlık'
          ],
          duration: 'Esnek',
          level: 'Tüm Seviyeler'
        }
      ]
    }
  }
})
</script>