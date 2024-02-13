<template>
  <div v-if="showChat">
    <div class="fixed flex-col items-center bottom-20 right-10 bg-white rounded-md">
      <div class="flex flex-row items-center bg-blue-500 text-white rounded-t-md h-10">
        <img class="flex-shrink-0 h-6 w-6 rounded-full m-2" src="/src/assets/obakibot.png" />
        <h2 class="text-sm font-semibold">obakibot</h2>

      </div>
      <button @click="ask" class="m-3 p-2 bg-blue-500 text-white rounded-md">
        Ask
      </button>
      <div class="flex flex-col overflow-auto w-80 h-96 items-center p-5">

        <BotMessage :botMessage="bot" />
        <BotMessage :botMessage="bot" />
        <BotMessage :botMessage="bot" />
        <BotMessage :botMessage="bot" />
        <UserMessage :userMessage="user" />

   
        <!-- Additional styling for input area or chat messages can be added here -->
      </div>

      <div class="bg-gray-300 rounded-b-md p-4">
        <textarea class="flex items-center h-10 w-full rounded px-3 text-sm" type="text"
          placeholder="Type your message…" />
      </div>
    </div>
  </div>
  <div class="py-10">
    <button @click="toggleChat" class="fixed bottom-5 right-10 p-2 bg-blue-500 text-white rounded-full">
      {{ showChat ? 'Close Chat' : 'Open Chat' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { askChatGpt } from '@/services/askChatGpt'
import type { ChatMessage } from '@/models/chatMessage';
import BotMessage from '../components/BotMessage.vue';
import UserMessage from '../components/UserMessage.vue';

const showChat = ref(false);
const test = ref('')

const bot = reactive<ChatMessage>({
  id: '1',
  sender: 'John',
  content: 'Hello,from bot?',
  timestamp: new Date(),
  isBot: false,
});

const user = reactive<ChatMessage>({
  id: '1',
  sender: 'John',
  content: 'Hello, from user?',
  timestamp: new Date(),
  isBot: false,
});

const toggleChat = () => {
  showChat.value = !showChat.value;
};

const ask = async () => {
  const answer = await askChatGpt('Tell me about yourself?');
  test.value = answer
};


</script>
