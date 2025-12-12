<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <h1 class="text-h2 text-center white--text">{{ $t('contact.title') }}</h1>
      </v-container>
    </v-container>

    <!-- Contact Content -->
    <v-container class="py-16">
      <v-row>
        <!-- Contact Form -->
        <v-col cols="12" md="6">
          <v-card class="pa-6">
            <h2 class="text-h4 mb-6">{{ $t('contact.formTitle') }}</h2>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                  v-model="form.name"
                  :label="$t('contact.name')"
                  variant="outlined"
                  required
                  class="mb-4"
              ></v-text-field>

              <v-text-field
                  v-model="form.email"
                  :label="$t('contact.email')"
                  type="email"
                  variant="outlined"
                  required
                  class="mb-4"
              ></v-text-field>

              <v-text-field
                  v-model="form.phone"
                  :label="$t('contact.phone')"
                  variant="outlined"
                  class="mb-4"
              ></v-text-field>

              <v-select
                  v-model="form.course"
                  :items="courses"
                  :item-title="item => $t(item)"
                  :label="$t('contact.courseInterest')"
                  variant="outlined"
                  class="mb-4"
              ></v-select>

              <v-textarea
                  v-model="form.message"
                  :label="$t('contact.message')"
                  rows="4"
                  variant="outlined"
                  class="mb-4"
              ></v-textarea>

              <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="loading"
              >
                {{ $t('contact.send') }}
                <v-icon end>mdi-send</v-icon>
              </v-btn>
            </v-form>
          </v-card>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="6">
          <v-card class="pa-6 mb-4">
            <h3 class="text-h5 mb-4">{{ $t('contact.infoTitle') }}</h3>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-map-marker</v-icon>
                </template>
                <v-list-item-title>{{ $t('contact.addressTitle') }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('contact.address') || 'Dereboyu Caddesi No: 25, Lefkoşa, KKTC' }}
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-phone</v-icon>
                </template>
                <v-list-item-title>{{ $t('contact.phoneTitle') }}</v-list-item-title>
                <v-list-item-subtitle>+90 392 227 1234</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-email</v-icon>
                </template>
                <v-list-item-title>{{ $t('contact.emailTitle') }}</v-list-item-title>
                <v-list-item-subtitle>info@cypruslanguageschool.com</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-clock</v-icon>
                </template>
                <v-list-item-title>{{ $t('contact.workingHoursTitle') }}</v-list-item-title>
                <v-list-item-subtitle style="white-space: pre-line;">{{ $t('contact.workingHours') }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Map -->
          <v-card>
            <v-img
                src="https://via.placeholder.com/600x300/1976D2/FFFFFF?text=Google+Maps"
                height="300"
                cover
            >
              <div class="d-flex align-center justify-center fill-height">
                <v-btn
                    color="white"
                    @click="openGoogleMaps"
                >
                  {{ $t('contact.viewMap') }}
                  <v-icon end>mdi-open-in-new</v-icon>
                </v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const { t } = useI18n()
    
    useHead({
      title: 'İletişim - Cyprus Language School',
      meta: [
        {
          name: 'description',
          content: 'Kıbrıs Dil Okulu iletişim bilgileri. Lefkoşa Dereboyu şubemiz için adres, telefon ve e-posta bilgileri. Ücretsiz danışmanlık alın.'
        }
      ]
    })

    const loading = ref(false)
    const form = ref({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })

    const courses = [
      'courses.generalEnglish',
      'courses.businessEnglish',
      'courses.ielts',
      'courses.russian',
      'courses.turkish',
      'courses.studyAbroad'
    ]

    const submitForm = () => {
      loading.value = true
      // Form gönderme işlemi simülasyonu
      setTimeout(() => {
        loading.value = false
        alert(t('contact.success'))
        // Form temizleme
        form.value = {
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        }
      }, 2000)
    }

    const openGoogleMaps = () => {
      window.open('https://maps.google.com/?q=35.1856,33.3823', '_blank')
    }

    return {
      form,
      courses,
      loading,
      submitForm,
      openGoogleMaps
    }
  }
})
</script>