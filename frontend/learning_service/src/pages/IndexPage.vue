<template>
  <q-page class="flex flex-center" padding>
    <div class="input-bar-container">
      <q-input rounded outlined autogrow v-model="msg" label="Input your text here...">
        <template v-slot:prepend> <q-btn icon="attach_file" round flat /></template>
        <template v-slot:append>
          <q-btn icon="arrow_circle_up" round flat @click="sendMessage" /></template>
      </q-input>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { messageRepository } from 'src/repositories/messageRepository'

const msg = ref('')

const sendMessage = async () => {
  const response = await messageRepository.sendMessage({
    message: `${msg.value}`,
    date_time: Math.floor(Date.now() / 1000)
  })
  console.log(response)
}
</script>
<style scoped>
.input-bar-container {
  max-width: 800px;
  width: 100%;
}
</style>
