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
  async deleteAllMessages() {
    try {
      const response = await api.delete(endpoints.deleteAllMessages)
      return response.data
    } catch (error) {
      throw new Error('Failed to delete all messages', error.message)
    }
  },
  async deleteSelectedMessages() {
    alert('Delete selected')
  },
}
