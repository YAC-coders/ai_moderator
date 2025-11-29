<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <h1 class="text-h6 text-center">Messages <q-badge rounded color="primary" :label="[messages.length]"
            align="top" />
        </h1>

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

        <!-- place QPageScroller at end of page -->
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { messageRepository } from 'src/repositories/messageRepository'

const messages = ref([])

onMounted(async () => {
  messages.value = await messageRepository.getMessages()
  messages.value.sort((a, b) => b.date_time - a.date_time)
})
</script>
