<template>
  <div class="flex w-full mt-2 space-x-3">
    <img class="flex-shrink-0 h-10 w-10 rounded-full" src="/src/assets/obakibot.svg" />
    <div>
      <div class="flex-initial mt-4 max-w-56 bg-gray-300 p-3 rounded-r-lg rounded-bl-lg break-words overflow-hidden text-left">
        <span v-if="chatMessage.isTyping" class="typing-indicator"></span>
        <span v-else class="text-sm text-gray-900">{{ chatMessage.content }}</span>
      </div>
      <span class="text-xs text-gray-500 leading-none">{{ formatTimestamp(chatMessage.timestamp) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/models/chatMessage';
import { formatTimestamp } from '../services/utilities'

defineProps<{
  chatMessage: ChatMessage;
}>();

</script>

<style scoped>
.typing-indicator {
  display: inline-block;
  width: 8px;
  height: 12px;
  background-color: #6b7280;
  animation: typingAnimation 1s infinite;
  margin-right: 4px;
}

@keyframes typingAnimation {

  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }
}</style>
