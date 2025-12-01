import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_HOSTNAME}:${process.env.VUE_APP_PORT}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const endpoints = {
  sendMessage: '/messages',
  getMessages: '/messages',
  deleteMessage: '/v1/message/',
  deleteAllMessages: '/messages/all',
}

export { api, endpoints }
