<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-breadcrumbs
                :items="breadcrumbs"
                color="white"
                class="pa-0 mb-4"
            >
              <template v-slot:item="{ item }">
                <router-link
                    :to="item.to"
                    class="white--text text-decoration-none"
                    v-if="item.to"
                >
                  {{ item.title }}
                </router-link>
                <span v-else class="white--text">{{ item.title }}</span>
              </template>
            </v-breadcrumbs>
            <h1 class="text-h2 white--text mb-4">
              <v-icon size="48" class="mr-3">mdi-alphabetical</v-icon>
              İngilizce Kursları
            </h1>
            <p class="text-h6 white--text mb-0">
              3 yaşından yetişkinlere kadar her seviyede kapsamlı İngilizce eğitimi
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <!-- Overview -->
      <v-row class="mb-12">
        <v-col cols="12">
          <h2 class="text-h3 mb-6 text-primary">Genel Bakış</h2>
          <p class="text-body-1 mb-4">
            Learn Plus English Center olarak, 3 yaşından yetişkinlere kadar her yaş grubuna özel
            hazırlanmış İngilizce kurslarımızla öğrencilerimizin dil öğrenme yolculuğunda yanlarındayız.
            Her seviyeden öğrencimiz için uygun programlar sunarak, İngilizceyi hayatın doğal bir parçası haline getirmeyi hedefliyoruz.
          </p>
        </v-col>
      </v-row>

      <!-- Course Categories -->
      <v-row>
        <v-col
            v-for="(course, index) in courses"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="mb-6"
        >
          <v-card class="h-100" hover>
            <v-card-title class="bg-gradient-primary text-white pa-4">
              <v-icon class="mr-2">{{ course.icon }}</v-icon>
              {{ course.title }}
            </v-card-title>
            <v-card-text class="pa-4">
              <v-chip
                  :color="course.ageColor"
                  size="small"
                  class="mb-3"
              >
                {{ course.age }}
              </v-chip>
              <p class="mb-4">{{ course.description }}</p>

              <v-divider class="my-3"></v-divider>

              <h4 class="text-h6 mb-2">Programın İçeriği:</h4>
              <v-list density="compact">
                <v-list-item
                    v-for="(feature, idx) in course.features"
                    :key="idx"
                    class="pl-0"
                >
                  <template v-slot:prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
                </v-list-item>
              </v-list>

              <div class="mt-4">
                <v-chip color="primary" variant="outlined" size="small" class="mr-2">
                  <v-icon start size="small">mdi-clock</v-icon>
                  {{ course.duration }}
                </v-chip>
                <v-chip color="secondary" variant="outlined" size="small">
                  <v-icon start size="small">mdi-account-group</v-icon>
                  {{ course.classSize }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Why Choose Our English Courses -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h3 mb-6 text-primary text-center">Neden Learn Plus İngilizce Kursları?</h2>
          <v-row>
            <v-col
                v-for="(advantage, index) in advantages"
                :key="index"
                cols="12"
                md="6"
                lg="3"
            >
              <div class="text-center">
                <v-avatar
                    size="80"
                    :color="advantage.color"
                    class="mb-4"
                >
                  <v-icon size="40" color="white">{{ advantage.icon }}</v-icon>
                </v-avatar>
                <h4 class="text-h6 mb-2">{{ advantage.title }}</h4>
                <p class="text-body-2">{{ advantage.description }}</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- CTA Section -->
      <v-row class="mt-16">
        <v-col cols="12" class="text-center">
          <v-card class="bg-gradient-primary pa-8">
            <h2 class="text-h4 white--text mb-4">
              İngilizce Öğrenme Yolculuğunuza Başlayın!
            </h2>
            <p class="text-h6 white--text mb-6">
              Ücretsiz seviye belirleme testi ve danışmanlık için bizimle iletişime geçin
            </p>
            <v-btn
                size="x-large"
                color="white"
                class="mr-4"
                @click="$router.push('/contact')"
            >
              Hemen İletişime Geç
              <v-icon end>mdi-phone</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EnglishCoursesPage',
  data() {
    return {
      breadcrumbs: [
        { title: 'Ana Sayfa', to: '/' },
        { title: 'Hizmetler', to: '/services' },
        { title: 'İngilizce Kursları', to: null }
      ],
      courses: [
        {
          icon: 'mdi-teddy-bear',
          title: 'Okul Öncesi İngilizce',
          age: '3-6 Yaş',
          ageColor: 'success',
          description: 'Erken yaşta dil eğitiminin önemi ile başlayarak çocukların doğal öğrenme kapasitelerini destekliyoruz',
          features: [
            'Erken yaşta dil eğitiminin önemi',
            'Oyun temelli öğrenme metodu',
            'İnteraktif aktiviteler',
            'Şarkılar ve müzikli öğrenme',
            'Phonics (Ses Bilgisi) eğitimi'
          ],
          duration: '2 Saat/Hafta',
          classSize: 'Max 8 Kişi'
        },
        {
          icon: 'mdi-school',
          title: 'İlkokul İngilizce',
          age: '7-10 Yaş',
          ageColor: 'primary',
          description: 'Kelime gelişimi ve sağlam İngilizce temeli oluşturarak dört temel beceriyi geliştiriyoruz',
          features: [
            'Kelime gelişimi ve sağlam İngilizce temeli',
            'Dört beceri: dinleme, konuşma, okuma, yazma',
            'Okul müfredatı desteği',
            'Cambridge sınavları (Starters, Movers, Flyers)',
            'Yaş grubuna uygun materyaller'
          ],
          duration: '3 Saat/Hafta',
          classSize: 'Max 10 Kişi'
        },
        {
          icon: 'mdi-trophy',
          title: 'Kolej Giriş Sınavlarına Hazırlık',
          age: '11-14 Yaş',
          ageColor: 'warning',
          description: 'Özel okul sınavlarında başarı için kapsamlı hazırlık programı sunuyoruz',
          features: [
            'Kapsamlı soru çözümleri',
            'Ücretsiz sınav kampları',
            'Bire bir öğrenci takibi',
            'Sınav teknikleri ve stratejileri',
            'Deneme sınavları ile pratik'
          ],
          duration: '4 Saat/Hafta',
          classSize: 'Max 12 Kişi'
        },
        {
          icon: 'mdi-book-open-variant',
          title: 'Ortaokul İngilizce',
          age: '11-14 Yaş',
          ageColor: 'info',
          description: 'Okul müfredatı takibi ve sınav desteği ile öğrencilerin akademik başarısını artırıyoruz',
          features: [
            'Okul müfredatı takibi + sınav desteği',
            'Dört beceri + konuşma özgüveni',
            'Dijital, yenilikçi materyaller',
            'Cambridge CAT & PET sınav hazırlığı',
            'İnteraktif öğrenme platformu'
          ],
          duration: '3 Saat/Hafta',
          classSize: 'Max 12 Kişi'
        },
        {
          icon: 'mdi-account-tie',
          title: 'Lise İngilizce',
          age: '15-18 Yaş',
          ageColor: 'purple',
          description: 'Akademik destek ve sınav hazırlığı ile üniversite yolunda güçlü bir temel oluşturuyoruz',
          features: [
            'Akademik destek ve sınav haftası hazırlığı',
            'Dört beceri + özgüven geliştirme',
            'Uluslararası sınavlar: IGCSE, IELTS',
            'Üniversite hazırlık programı',
            'İleri seviye akademik yazım'
          ],
          duration: '4 Saat/Hafta',
          classSize: 'Max 15 Kişi'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Yetişkin İngilizce',
          age: '18+ Yaş',
          ageColor: 'teal',
          description: 'İş, günlük yaşam ve seyahat için gerekli İngilizce becerileri kazandırıyoruz',
          features: [
            'Genel İngilizce (iş, günlük yaşam, seyahat)',
            'IELTS, APTIS ESOL gibi sınav hazırlıkları',
            'Kişiye özel ders programları',
            'Esnek ders saatleri',
            'Profesyonel İngilizce becerileri'
          ],
          duration: 'Esnek Program',
          classSize: 'Max 15 Kişi'
        }
      ],
      advantages: [
        {
          icon: 'mdi-account-star',
          title: 'Deneyimli Eğitmenler',
          description: 'Alanında uzman, sertifikalı öğretmen kadrosu',
          color: 'primary'
        },
        {
          icon: 'mdi-gamepad-variant',
          title: 'Etkileşimli Metodlar',
          description: 'Oyun tabanlı ve interaktif öğrenme teknikleri',
          color: 'success'
        },
        {
          icon: 'mdi-clipboard-check',
          title: 'Bireysel Takip',
          description: 'Her öğrencinin gelişimi özel olarak takip edilir',
          color: 'warning'
        },
        {
          icon: 'mdi-certificate',
          title: 'Sertifikalı Eğitim',
          description: 'Uluslararası standartlarda sertifika programları',
          color: 'info'
        }
      ]
    }
  },
  methods: {
    contactForCourse(courseName: string) {
      // Contact sayfasına kurs bilgisi ile yönlendir
      this.$router.push({
        path: '/contact',
        query: { course: courseName }
      })
    }
  }
})
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(45deg, #1976D2 30%, #42A5F5 90%);
}

.v-card:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>