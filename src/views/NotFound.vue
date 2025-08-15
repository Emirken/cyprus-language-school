<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-icon size="100" color="primary" class="mb-6">mdi-alert-circle-outline</v-icon>
        <h1 class="text-h2 mb-4">404</h1>
        <h2 class="text-h4 mb-4">Sayfa Bulunamadı</h2>
        <p class="text-body-1 mb-6">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <v-btn
            color="primary"
            size="large"
            @click="$router.push('/')"
        >
          Ana Sayfaya Dön
          <v-icon end>mdi-home</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>