import api from './api'

export const auth = {
    isAuthenticated: false,

    async verifyAuth() {
        const auth = await api.get('/isauth')
        this.isAuthenticated = auth.data.auth
    },
}