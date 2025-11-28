<template>
  <h1 class="text-h6 text-center">Messages</h1>

  <q-list separator>
    <q-item v-ripple v-for="item in messages" :key="item.id">
      <q-item-section>
        <q-item-label> {{ item.message }}</q-item-label>
        <q-item-label caption>
          {{ new Date(item.date_time * 1000).toLocaleString("ru-RU") }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>

</template>
<script setup>
import { onMounted, ref } from 'vue'
import { messageRepository } from 'src/repositories/messageRepository'

const messages = ref([])

onMounted(async () => {
  messages.value = await messageRepository.getMessages()

})
</script>
