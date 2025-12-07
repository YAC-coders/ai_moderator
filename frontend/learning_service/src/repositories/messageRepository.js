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
  async deleteAllMessages(msg) {
    try {
      for (const item of msg) {
        await api.delete(`${endpoints.deleteMessage}/${item.id}`)
      }
    } catch (error) {
      throw new Error('Failed to delete all messages', error.message)
    }
  },
  async deleteSelectedMessages(selected) {
    try {
      for (const id of selected.value) {
        await api.delete(`${endpoints.deleteMessage}/${id}`)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },
}
