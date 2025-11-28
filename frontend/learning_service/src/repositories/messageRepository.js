import { api, endpoints } from '../services/api'

export const messageRepository = {
  async sendMessage(message) {
    try {
      const response = await api.post(endpoints.sendMessage, message)
      return response.data
    } catch (error) {
      throw new Error('Failed to send message', error.message)
    }
  },
  async getMessages() {
    try {
      const response = await api.get(endpoints.getMessages)
      return response.data
    } catch (error) {
      throw new Error('Failed to load messages: ', error.message)
    }
  },
  deleteMessage: {},
}
