<template>
  <div class="flex w-full mt-2 space-x-3 max-w-xs">
    <img class="flex-shrink-0 h-10 w-10 rounded-full" src="/src/assets/obakibot.png" />
    <div>
      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
        <p class="text-sm">{{ botMessage.content }}</p>
      </div>
      <span class="text-xs text-gray-500 leading-none">{{ formatTimestamp(botMessage.timestamp) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/models/chatMessage';

defineProps<{
  botMessage: ChatMessage;
}>();

const formatTimestamp = (timestamp: Date) => {
  const minutesAgo = Math.floor((Date.now() - timestamp.getTime()) / (1000 * 60));
  return `${minutesAgo} min ago`;
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
