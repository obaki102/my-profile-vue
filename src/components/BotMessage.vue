<template>
  <div class="flex w-full mt-2 space-x-3">
    <img class="flex-shrink-0 h-10 w-10 rounded-full" src="/src/assets/obakibot.svg" />
    <div class="flex flex-col">
      <div class="chat-bubble mt-4" v-if="chatMessage.isTyping">
        <div class="typing">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div v-else
        class="flex-initial mt-4 max-w-56 bg-gray-300 p-3 rounded-r-lg rounded-bl-lg break-words overflow-hidden text-left">
        <span class="text-sm text-gray-900">{{ chatMessage.content }}</span>
      </div>
      <ChatTimePassed :timestamp.date="chatMessage.timestamp" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/models/chatMessage';
import ChatTimePassed from '../components/TimePassed.vue';
defineProps<{
  chatMessage: ChatMessage;
}>();

</script>

<style scoped>
.chat-bubble {
  background-color: #D1D5DB;
  padding: 16px 28px;
  -webkit-border-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 0;
  display: inline-block;
}

.typing {
  align-items: center;
  display: flex;
  height: 17px;
}

.typing .dot {
  animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
  background-color: #2b62c9;
  border-radius: 50%;
  height: 7px;
  margin-right: 4px;
  vertical-align: middle;
  width: 7px;
  display: inline-block;
}

.typing .dot:nth-child(1) {
  animation-delay: 200ms;
}

.typing .dot:nth-child(2) {
  animation-delay: 300ms;
}

.typing .dot:nth-child(3) {
  animation-delay: 400ms;
}

.typing .dot:last-child {
  margin-right: 0;
}

@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
    background-color: #486aad;
  }

  28% {
    transform: translateY(-7px);
    background-color: #5890cd;
  }

  44% {
    transform: translateY(0px);
    background-color: #6d9ac3;
  }
}
</style>
