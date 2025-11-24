import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_HOSTNAME}:${process.env.VUE_APP_PORT}/api`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
