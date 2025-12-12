<template>
  <v-app>
    <!-- Header -->
    <v-app-bar
      app
      :color="isScrolled ? 'white' : 'transparent'"
      :elevation="isScrolled ? 2 : 0"
      height="80"
      class="transition-all"
      :class="{ 'scrolled': isScrolled }"
    >
      <v-container class="d-flex align-center container-custom">
        <router-link to="/" class="d-flex align-center text-decoration-none">
          <v-avatar color="primary" size="48" class="mr-3 elevation-2">
            <v-icon size="28" color="white">mdi-school</v-icon>
          </v-avatar>
          <div class="d-flex flex-column">
            <span class="text-h6 font-weight-black primary--text lh-1" :class="{ 'white--text': !isScrolled && isHome }">
              CYPRUS
            </span>
            <span class="text-subtitle-2 font-weight-medium secondary--text lh-1">
              LANGUAGE SCHOOL
            </span>
          </div>
        </router-link>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            variant="text"
            rounded
            class="mx-1 nav-btn"
            :class="{ 'white--text': !isScrolled && isHome, 'primary--text': isScrolled || !isHome }"
          >
            {{ $t(item.title) }}
          </v-btn>

          <v-divider vertical class="mx-4" :color="(!isScrolled && isHome) ? 'white' : 'grey'"></v-divider>

          <!-- Language Selector -->
          <v-menu location="bottom end" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                variant="outlined"
                rounded
                :color="(!isScrolled && isHome) ? 'white' : 'primary'"
                class="ml-2"
              >
                <v-icon start>mdi-web</v-icon>
                {{ currentLang.toUpperCase() }}
                <v-icon end>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list density="compact" elevation="3" rounded="lg" class="mt-2">
              <v-list-item
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                :active="currentLang === lang.code"
                color="primary"
                rounded="sm"
              >
                <template v-slot:prepend>
                  <span class="text-h6 mr-2">{{ lang.flag }}</span>
                </template>
                <v-list-item-title>{{ lang.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            color="secondary"
            class="ml-4 font-weight-bold"
            rounded
            elevation="2"
            to="/contact"
          >
            Başvuru Yap
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
          :color="(!isScrolled && isHome) ? 'white' : 'primary'"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="300"
    >
      <div class="pa-4 bg-primary text-center">
        <v-avatar color="white" size="64" class="mb-3">
          <v-icon size="32" color="primary">mdi-school</v-icon>
        </v-avatar>
        <h3 class="white--text text-h6 font-weight-bold">Cyprus Language School</h3>
      </div>

      <v-list class="pa-2">
        <v-list-item
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="drawer = false"
          rounded="lg"
          class="mb-1"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" color="primary"></v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">{{ $t(item.title) }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-4">
          <p class="text-caption text-center text-grey mb-2">Dil Değiştir</p>
          <div class="d-flex justify-center gap-2 mb-4">
            <v-btn
              v-for="lang in languages"
              :key="lang.code"
              icon
              variant="tonal"
              size="small"
              :color="currentLang === lang.code ? 'primary' : 'grey'"
              @click="changeLanguage(lang.code)"
            >
              <span class="text-h6">{{ lang.flag }}</span>
            </v-btn>
          </div>
          <v-btn block color="secondary" size="large" to="/contact" elevation="2">
            Hemen Başvur
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Footer -->
    <v-footer color="primary" class="pt-16 pb-8 text-white">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="4" class="mb-8 mb-md-0">
            <div class="d-flex align-center mb-6">
              <v-avatar color="white" size="40" class="mr-3">
                <v-icon size="24" color="primary">mdi-school</v-icon>
              </v-avatar>
              <div>
                <h4 class="text-h6 font-weight-bold mb-0 lh-1">CYPRUS</h4>
                <div class="text-caption text-secondary font-weight-bold">LANGUAGE SCHOOL</div>
              </div>
            </div>
            <p class="text-body-2 opacity-80 mb-6" style="max-width: 300px;">
              Kıbrıs'ın kalbinde, uluslararası standartlarda dil eğitimi. Geleceğinize yatırım yapın, dünyayı bizimle keşfedin.
            </p>
            <div class="d-flex gap-2">
              <v-btn icon="mdi-facebook" variant="tonal" color="white" size="small" class="social-btn"></v-btn>
              <v-btn icon="mdi-instagram" variant="tonal" color="white" size="small" class="social-btn"></v-btn>
              <v-btn icon="mdi-linkedin" variant="tonal" color="white" size="small" class="social-btn"></v-btn>
              <v-btn icon="mdi-youtube" variant="tonal" color="white" size="small" class="social-btn"></v-btn>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="2" class="mb-8 mb-sm-0">
            <h5 class="text-subtitle-1 font-weight-bold mb-4 text-secondary">Hızlı Linkler</h5>
            <div class="d-flex flex-column gap-2">
              <router-link v-for="item in menuItems" :key="item.path" :to="item.path" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">
                {{ $t(item.title) }}
              </router-link>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="mb-8 mb-sm-0">
            <h5 class="text-subtitle-1 font-weight-bold mb-4 text-secondary">Programlar</h5>
            <div class="d-flex flex-column gap-2">
              <a href="#" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">Genel İngilizce</a>
              <a href="#" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">Akademik Rusça</a>
              <a href="#" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">Yabancılar için Türkçe</a>
              <a href="#" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">IELTS Hazırlık</a>
              <a href="#" class="text-body-2 text-white text-decoration-none opacity-80 hover-opacity-100 transition-all">Çocuk Grupları</a>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <h5 class="text-subtitle-1 font-weight-bold mb-4 text-secondary">Bize Ulaşın</h5>
            <div class="d-flex flex-column gap-3">
              <div class="d-flex align-start">
                <v-icon size="small" color="secondary" class="mt-1 mr-3">mdi-map-marker</v-icon>
                <span class="text-body-2 opacity-80">Dereboyu Cad. No:25, Lefkoşa,<br>KKTC</span>
              </div>
              <div class="d-flex align-center">
                <v-icon size="small" color="secondary" class="mr-3">mdi-phone</v-icon>
                <span class="text-body-2 opacity-80">+90 392 227 1234</span>
              </div>
              <div class="d-flex align-center">
                <v-icon size="small" color="secondary" class="mr-3">mdi-email</v-icon>
                <span class="text-body-2 opacity-80">info@cypruslanguage.com</span>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-8" color="white" opacity="0.15"></v-divider>

        <div class="d-flex flex-column flex-md-row justify-space-between align-center text-caption opacity-60">
          <div class="mb-4 mb-md-0">
            © {{ new Date().getFullYear() }} Cyprus Language School. Tüm hakları saklıdır.
          </div>
          <div class="d-flex gap-4">
            <a href="#" class="text-white text-decoration-none">Gizlilik Politikası</a>
            <a href="#" class="text-white text-decoration-none">Kullanım Şartları</a>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n()
    const store = useStore()
    const route = useRoute()
    const drawer = ref(false)
    const isScrolled = ref(false)

    // Check if current route is Home to apply transparent header
    const isHome = computed(() => route.path === '/')

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const menuItems = [
      { title: 'nav.home', path: '/', icon: 'mdi-home' },
      { title: 'nav.about', path: '/about', icon: 'mdi-information' },
      { title: 'nav.services', path: '/services', icon: 'mdi-book-open-variant' },
      { title: 'nav.contact', path: '/contact', icon: 'mdi-card-account-mail' }
    ]

    const languages = [
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ]

    const currentLang = computed(() => locale.value)

    const changeLanguage = (lang: string) => {
      locale.value = lang
      store.dispatch('settings/changeLanguage', lang)
    }

    return {
      drawer,
      menuItems,
      languages,
      currentLang,
      changeLanguage,
      isScrolled,
      isHome
    }
  }
})
</script>

<style scoped>
.lh-1 {
  line-height: 1;
}

.transition-all {
  transition: all 0.3s ease-in-out;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.hover-opacity-100:hover {
  opacity: 1 !important;
}

.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.3s ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>