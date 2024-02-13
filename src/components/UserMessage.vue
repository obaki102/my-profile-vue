<template>
  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
    <div>
      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
        <p class="text-sm">{{ userMessage.content }}</p>
      </div>
      <span class="text-xs text-gray-500 leading-none">{{ formatTimestamp(userMessage.timestamp) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/models/chatMessage';
import { formatTimestamp } from '../services/utilities'
defineProps<{
  userMessage: ChatMessage;
}>();


</script>

<style scoped>
/* Add any scoped styles here */
</style>
