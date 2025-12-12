// src/plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1a237e', // Deep Royal Blue
                    secondary: '#ffca28', // Energetic Orange
                    accent: '#009688', // Teal
                    error: '#d32f2f',
                    warning: '#f57c00',
                    info: '#0288d1',
                    success: '#388e3c',
                    background: '#f5f5f5',
                    surface: '#ffffff'
                }
            }
        }
    }
})