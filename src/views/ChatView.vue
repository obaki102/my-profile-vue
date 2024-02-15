<template>
  <div v-if="showChat" class="max-sm:invisible">
    <div class="fixed flex-col items-center bottom-20 right-10 bg-white rounded-md">
      <div class="flex flex-row items-center bg-blue-500 text-white rounded-t-md h-10">
        <img class="flex-shrink-0 h-6 w-6 rounded-full m-2" src="/src/assets/obakibot.svg" />
        <h2 class="text-sm font-semibold">obakibot</h2>
      </div>
      <!-- Header -->

      <div class="flex flex-col items-center ">
        <span class="m-2 text-sm text-gray-700">{{ formattedDateTime }}</span>
        <!-- <button @click="askBot('Tell me more about yourself ?', true)"
          class="m-3 p-2 bg-blue-500 text-white text-sm rounded-full">
          Tell me more about yourself ?
        </button>
        <button @click="askBot('Tell me more about yourself ?', false)"
          class="m-3 p-2 bg-blue-500 text-white text-sm rounded-full">
          Tell me more about yourself user?
        </button> -->
      </div>
      <!-- Body -->
      <div class="flex flex-col overflow-x-hidden overflow-y-auto w-96 h-96 p-5" ref="scrollContainer">
        <div v-for="chat in chats" :key="chat.id">
          <component :chatMessage="chat" :is="chat.isBot ? BotMessage : UserMessage" />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <button @click="initializeConversation('Tell me more about yourself ?')"
          class="my-1 p-3 bg-blue-500 text-white text-sm rounded-full">
          Tell me more about yourself ?
        </button>
        <button @click="initializeConversation('What are your skill ?')"
          class="my-1 p-3 bg-blue-500 text-white text-sm rounded-full">
          What are your skill?
        </button>
      </div>
      <!-- Chat -->
      <div class="flex flex-row items-center bg-gray-300 rounded-b-md p-2">
        <div class="relative">
          <textarea v-model="message" :class="{ 'ml-2 w-72': isValidText, 'w-72 ml-2': !isValidText }"
            class="flex items-center h-10 rounded px-3 text-sm resize-none overflow-y-auto text-gray-700 "
            placeholder="Type your message…" @input="checkTextAreaValidity"></textarea>
        </div>
        <button v-if="isValidText" class="ml-5 px-3 py-1 rounded-full text-white bg-blue-400 hover:bg-blue-500"
          @click="sendMessage" title="Send message.">
          <img class="w-2 h-2 m-1 " src="/src/assets/send.svg" />
        </button>
      </div>
    </div>
  </div>
  <div class="py-10 max-sm:invisible">
    <button @click="toggleChat" :class="{ 'bg-blue-400': showChat, 'bg-gray-200': !showChat }"
      class="fixed bottom-5 right-10 p-2  rounded-md text-white focus:outline-none">
      <img class="w-7 h-7 m-1" src="/src/assets/obakibot.svg" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted, nextTick } from 'vue';
import { askChatGpt } from '@/services/askChatGpt'
import type { ChatMessage } from '@/models/chatMessage';
import BotMessage from '../components/BotMessage.vue';
import UserMessage from '../components/UserMessage.vue';
import { v4 as uuidv4 } from 'uuid';

const showChat = ref(false);
const message = ref('');
const isValidText = ref(false);
const chats = reactive([] as ChatMessage[]);
const formattedDateTime = ref('');
const scrollContainer = ref<HTMLElement | null>(null);

watch(
  () => chats.length,
  async () => {
    await asyncScrollDown();
  }
);

onMounted(async () => {
  const uniqueId = uuidv4();
  const initialMessage: ChatMessage = {
    id: uniqueId,
    content: 'Hello! I appreciate your visit to my site. If there is anything you like to know more about me, please do not hesitate to ask. Thank you very much!',
    isTyping: false,
    timestamp: new Date(),
    isBot: true,
  };
  chats.push(initialMessage);
  await asyncScrollDown();
});

const toggleChat = () => {
  showChat.value = !showChat.value;
};


const asyncScrollDown = async () => {
  await nextTick();
  const container = scrollContainer.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};


const askBot = async (message: string) => {
  const uniqueId = uuidv4();
  const bot: ChatMessage = {
    id: uniqueId,
    content: '',
    isTyping: true,
    timestamp: new Date(),
    isBot: true,
  };

  chats.push(bot);

  try {
    const answer = await askChatGpt(message);
    const existingEntryIndex = chats.findIndex(entry => entry.id === uniqueId);

    if (existingEntryIndex !== -1) {
      const existingEntry = chats[existingEntryIndex];
      existingEntry.content = answer;
      existingEntry.isTyping = false;
    }
  } catch (error) {
    console.error('Error fetching message from askChatGpt:', error);
  }
  await asyncScrollDown();
};

const addUserMessage = (content: string) => {
  const uniqueId = uuidv4();
  const userMessage: ChatMessage = {
    id: uniqueId,
    content,
    isTyping: false,
    timestamp: new Date(),
    isBot: false,
  };
  chats.push(userMessage);
};

const sendMessage = async () => {
  addUserMessage(message.value);
  await askBot(message.value);
  message.value = '';
};

const initializeConversation = async (messageContent: string) => {
  addUserMessage(messageContent);
  await askBot(messageContent);
};
const checkTextAreaValidity = () => {
  isValidText.value = message.value.trim().length > 0;
};


onMounted(() => {
  updateFormattedDateTime();
  setInterval(updateFormattedDateTime, 60000); // Update every minute
});

const updateFormattedDateTime = () => {
  const now = new Date();
  formattedDateTime.value = formatDateTime(now);
};

const formatDateTime = (date: Date) => {
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  const timeString = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  return isToday ? `Today ${timeString}` : date.toLocaleString();
};

</script>

