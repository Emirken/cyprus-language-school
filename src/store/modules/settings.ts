export default {
    namespaced: true,
    state: {
        language: localStorage.getItem('language') || 'tr',
        theme: 'light'
    },
    mutations: {
        SET_LANGUAGE(state: any, lang: string) {
            state.language = lang
            localStorage.setItem('language', lang)
        },
        SET_THEME(state: any, theme: string) {
            state.theme = theme
        }
    },
    actions: {
        changeLanguage({ commit }: any, lang: string) {
            commit('SET_LANGUAGE', lang)
        }
    }
}