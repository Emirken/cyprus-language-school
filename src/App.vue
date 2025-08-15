<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="white" elevation="2">
      <v-container class="d-flex align-center">
        <v-app-bar-title class="d-flex align-center">
          <v-icon size="36" color="primary" class="mr-3">mdi-school</v-icon>
          <span class="text-h5 font-weight-bold primary--text">
            Cyprus Language School
          </span>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center">
          <v-btn
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              variant="text"
              color="primary"
              class="mx-2"
          >
            {{ $t(item.title) }}
          </v-btn>

          <!-- Language Selector -->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                  v-bind="props"
                  variant="outlined"
                  color="primary"
                  size="small"
                  class="ml-4"
              >
                <v-icon start>mdi-translate</v-icon>
                {{ currentLang.toUpperCase() }}
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  :active="currentLang === lang.code"
              >
                <v-list-item-title>
                  {{ lang.flag }} {{ lang.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- Mobile Menu Button -->
        <v-app-bar-nav-icon
            class="d-md-none"
            @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
    >
      <v-list>
        <v-list-item
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="drawer = false"
        >
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-subheader>Dil Seçimi</v-list-subheader>
        <v-list-item
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code); drawer = false"
        >
          <v-list-item-title>
            {{ lang.flag }} {{ lang.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer color="primary" app>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h4 class="text-h6 white--text mb-3">Cyprus Language School</h4>
            <p class="white--text text-body-2">
              Kıbrıs'ın önde gelen dil okulu olarak, İngilizce, Rusça ve Türkçe eğitiminde uzman kadromuzla hizmetinizdeyiz.
            </p>
            <div class="mt-3">
              <v-btn icon="mdi-facebook" variant="text" color="white" size="small"></v-btn>
              <v-btn icon="mdi-instagram" variant="text" color="white" size="small"></v-btn>
              <v-btn icon="mdi-twitter" variant="text" color="white" size="small"></v-btn>
              <v-btn icon="mdi-linkedin" variant="text" color="white" size="small"></v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <h4 class="text-h6 white--text mb-3">Hızlı Linkler</h4>
            <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="d-block white--text text-decoration-none mb-2"
            >
              {{ $t(item.title) }}
            </router-link>
          </v-col>

          <v-col cols="12" md="4">
            <h4 class="text-h6 white--text mb-3">İletişim</h4>
            <p class="white--text text-body-2">
              <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
              Dereboyu Cad. No:25, Lefkoşa, KKTC
            </p>
            <p class="white--text text-body-2">
              <v-icon size="small" class="mr-2">mdi-phone</v-icon>
              +90 392 227 1234
            </p>
            <p class="white--text text-body-2">
              <v-icon size="small" class="mr-2">mdi-email</v-icon>
              info@cypruslanguage.com
            </p>
          </v-col>
        </v-row>

        <v-divider class="my-4" color="white" opacity="0.2"></v-divider>

        <div class="text-center white--text text-body-2">
          © 2024 Cyprus Language School. Tüm hakları saklıdır.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n()
    const store = useStore()
    const drawer = ref(false)

    const menuItems = [
      { title: 'nav.home', path: '/' },
      { title: 'nav.about', path: '/about' },
      { title: 'nav.services', path: '/services' },
      { title: 'nav.contact', path: '/contact' }
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
      changeLanguage
    }
  }
})
</script>

<style scoped>
.v-app-bar-title {
  cursor: pointer;
}
</style>