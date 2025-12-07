<template>
  <q-page class="flex flex-center" padding>
    <div class="input-bar-container">
      <q-input
        rounded
        outlined
        autogrow
        v-model="msg"
        label="Input your text here..."
        :rules="[(val) => (val && val.trim().length >= 3) || 'Minimum 3 characters']"
        lazy-rules="ondemand"
      >
        <template v-slot:prepend> <q-btn icon="attach_file" round flat disable /></template>
        <template v-slot:append>
          <q-btn icon="arrow_circle_up" round flat @click="sendMessage"
        /></template>
      </q-input>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { messageRepository } from 'src/repositories/messageRepository'
import { Notify } from 'quasar'

const msg = ref('')

const sendMessage = async () => {
  if (msg.value.length === 0 || msg.value.length < 3) {
    Notify.create({
      message: 'Minimum 3 characters required',
      color: 'warning',
      textColor: 'dark',
    })
    return
  }
  try {
    await messageRepository.sendMessage({
      message: msg.value.trim(),
      date_time: Math.floor(Date.now() / 1000), // convert milliseconds to seconds
    })
    Notify.create({
      message: 'Success',
      color: 'positive',
    })
    msg.value = ''
  } catch (error) {
    Notify.create({
      message: `Error: ${error.message}`,
      color: 'negative',
    })
    throw new Error(error.message)
  }
}
</script>
<style scoped>
.input-bar-container {
  max-width: 800px;
  width: 100%;
}
</style>
