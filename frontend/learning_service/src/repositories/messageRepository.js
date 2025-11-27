import { api, endpoints } from '../services/api'

export const messageRepository = {
  async sendMessage(message) {
    try {
      const response = await api.post(endpoints.sendMessage, message)
      return response.data
    } catch (error) {
      throw new Error('Failed to send message: ', error.message)
    }
  },
  getMessages: {},
  deleteMessage: {},
}
