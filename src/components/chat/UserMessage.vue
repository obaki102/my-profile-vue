<template>
  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
    <div>
      <div
        class="flex-initial  mt-4 max-w-56 bg-blue-600 text-white p-3 rounded-l-lg rounded-bl-lg rounded-br-lg break-words overflow-hidden text-left">
        <p class="text-sm">{{ chatMessage.content }}</p>
      </div>
      <ChatTimePassed :timestamp.date="chatMessage.timestamp" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/models/chatMessage';
import ChatTimePassed from './TimePassed.vue';
defineProps<{
  chatMessage: ChatMessage;
}>();


</script>

<style scoped>
/* Add any scoped styles here */
</style>
