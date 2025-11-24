<template>
  <q-page class="flex flex-center" padding>
    <div class="input-bar-container">
      <q-input rounded outlined autogrow v-model="msg" label="Input your text here...">
        <template v-slot:prepend> <q-btn icon="attach_file" round flat /></template>
        <template v-slot:append> <q-btn icon="arrow_circle_up" round flat /></template>
      </q-input>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('')
</script>
<style scoped>
.input-bar-container {
  max-width: 800px;
  width: 100%;
}
</style>
