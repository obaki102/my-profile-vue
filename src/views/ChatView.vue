<template>
  <div v-if="showChat">
    <div class="fixed flex-col items-center bottom-20 right-10 bg-white rounded-md">
      <div class="flex flex-row items-center bg-blue-500 text-white rounded-t-md h-10">
        <img class="flex-shrink-0 h-6 w-6 rounded-full m-2" src="/src/assets/obakibot.svg" />
        <h2 class="text-sm font-semibold">obakibot</h2>
      </div>
      <!-- Header -->
      <button @click="ask" class="m-3 p-2 bg-blue-500 text-white rounded-md">
        Ask
      </button>
      <!-- Body -->
      <div class="flex flex-col overflow-auto w-80 h-96 p-5">
        <div v-for="chat in chats" :key="chat.id">
          <component :chatMessage="chat" :is="chat.isBot ? BotMessage : UserMessage" />
        </div>
      </div>
      <!-- Chat -->
      <div class="flex flex-row items-center bg-gray-300 rounded-b-md p-2">
        <div class="relative">
          <textarea v-model="message" :class="{ 'w-60': isValidText, 'w-72 ml-2': !isValidText }"
            class="flex items-center h-10 rounded px-3 text-sm resize-none overflow-y-auto text-gray-700 "
            placeholder="Type your message…" @input="checkTextAreaValidity" @keyup.enter="handleEnterKey"></textarea>
        </div>
        <button v-if="isValidText" class="ml-2 px-3 py-1 rounded-full text-white bg-blue-400 hover:bg-blue-500">

          <img class="w-3 h-3 m-1 " src="/src/assets/send.svg" />
        </button>
      </div>
    </div>
  </div>
  <div class="py-10">
    <button @click="toggleChat" :class="{ 'bg-blue-400': showChat, 'bg-gray-200': !showChat }"
      class="fixed bottom-5 right-10 p-2  rounded-md text-white focus:outline-none">
      <img class="w-7 h-7 m-1" src="/src/assets/obakibot.svg" />
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
const message = ref('');
const isValidText = ref(false);
const chats = reactive([] as ChatMessage[]);


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
  const bot = reactive<ChatMessage>({
    id: '1',
    sender: 'John',
    content: 'Hello,from bot?',
    isTyping: false,
    timestamp: new Date(),
    isBot: true,
  });
  chats.push(bot);
  console.log(chats)

};

const checkTextAreaValidity = () => {
  isValidText.value = message.value.trim().length > 0;
};

const handleEnterKey = () => {
  console.log("Enter key pressed. Do something!");
}


</script>
