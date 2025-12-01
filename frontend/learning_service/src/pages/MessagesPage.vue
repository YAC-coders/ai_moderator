<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <h1 class="text-h6 text-center">Messages <q-badge rounded color="primary" :label="messages.length"
            align="top" />
        </h1>
        <div class="row justify-between">
          <q-select outlined v-model="selectedOption" :options="selectOptions" dense transition-show="jump-up"
            transition-hide="jump-up" style="width: 120px" @update:model-value="sortMessages" />

          <q-btn color="negative" label="Delete all" size="sm" outline @click="confirmDelete" />
        </div>
        <q-list separator>
          <q-item v-ripple v-for="item in messages" :key="item.id" class="q-px-none">
            <q-item-section>
              <q-item-label> {{ item.message }}</q-item-label>
              <q-item-label caption>
                {{ new Date(item.date_time * 1000).toLocaleString("ru-RU") }}
              </q-item-label>
            </q-item-section>
            <q-checkbox v-model="selected" :val="item.id" />
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
import { useQuasar } from 'quasar'
import { messageRepository } from 'src/repositories/messageRepository'

const messages = ref([])
const $q = useQuasar()
const selected = ref([])

const selectedOption = ref('Newest')
const selectOptions = ref([
  {
    label: 'Newest',
    value: 'newest',
    icon: 'arrow_up'
  },
  {
    label: 'Oldest',
    value: 'oldest',
    icon: 'arrow_down'
  }
])

const sortMessages = () => {
  if (selectedOption.value.value === 'oldest') {
    messages.value = messages.value.sort((a, b) => a.date_time - b.date_time)
  }
  if (selectedOption.value.value === 'newest') {
    messages.value = messages.value.sort((a, b) => b.date_time - a.date_time)
  }
}


onMounted(async () => {
  messages.value = await messageRepository.getMessages()
  messages.value.sort((a, b) => b.date_time - a.date_time)
})


const deleteAllMessages = async () => {
  try {
    await messageRepository.deleteAllMessages()
  } catch (error) {
    $q.notify({
      message: error.message,
      color: 'negative',
      position: 'top'
    })
    console.log(error)
  }
}

const confirmDelete = () => {
  $q.dialog({
    title: 'Confirmation',
    message: 'Are you sure you want to delete all messages?',
    ok: {
      label: 'Yes, delete all',
      flat: false,
      color: 'negative'
    },
    cancel: {
      label: 'Cancel',
      flat: true
    }
  }).onOk(() => {
    deleteAllMessages()
  })
}
</script>
