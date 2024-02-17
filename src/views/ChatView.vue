<template>
  <div v-if="showChat" class="max-sm:invisible">
    <div class="fixed flex-col items-center bottom-20 right-10 bg-white rounded-md">
      <div class="flex flex-row items-center bg-blue-500 text-white rounded-t-md h-10">
        <img class="flex-shrink-0 h-6 w-6 rounded-full m-2" src="/src/assets/obakibot.svg" />
        <h2 class="text-sm font-semibold">obakibot</h2>
      </div>
      <!-- Header -->

      <div class="flex flex-col items-center ">
        <span class="m-1 text-sm text-gray-700">{{ formattedDateTime }}</span>
      </div>
      <!-- Body -->
      <div class="flex flex-col overflow-x-hidden overflow-y-auto w-96 h-96 p-5" ref="scrollContainer"
        v-if="renderComponent">
        <div v-for="chat in chats" :key="chat.id">
          <component :chatMessage="chat" :is="chat.isBot ? BotMessage : UserMessage" />
        </div>
      </div>
      <div class="flex flex-col items-center" v-if="!hidePreQuestions">
        <button @click="initializeConversation('Tell me more about yourself?')"
          class="my-1 p-3 bg-blue-500 text-white text-sm rounded-full">
          Tell me more about yourself ?
        </button>
        <button @click="initializeConversation('What are your skills?')"
          class="my-1 p-3 bg-blue-500 text-white text-sm rounded-full">
          What are your skills ?
        </button>
      </div>
      <!-- Chat -->
      <div class="flex flex-row items-center bg-gray-300 rounded-b-md p-2">
        <div class="relative">
          <textarea v-model="message" :class="{ 'ml-2 w-72': isValidText, 'w-72 ml-2': !isValidText }"
            class="flex items-center h-10 rounded px-3 text-sm resize-none overflow-y-auto text-gray-700"
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
      class="fixed bottom-5 right-10 p-2  rounded-md text-white focus:outline-none hover:bg-blue-400 border-solid border-2 border-gray-900">
      <img class="w-7 h-7 m-1" src="/src/assets/obakibot.svg" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted, nextTick } from 'vue';
import { askChatGpt } from '@/services/askChatGpt'
import type { ChatMessage } from '@/models/chatMessage';
import BotMessage from '../components/chat/BotMessage.vue';
import UserMessage from '../components/chat/UserMessage.vue';
import { v4 as uuidv4 } from 'uuid';

const showChat = ref(false);
const message = ref('');
const isValidText = ref(false);
const hidePreQuestions = ref(false);
const chats = reactive([] as ChatMessage[]);
const formattedDateTime = ref('');
const scrollContainer = ref<HTMLElement | null>(null);
const renderComponent = ref(true);

watch(
  () => chats.length,
  async () => {
    await forceRerender();
    await asyncScrollDown();
  }
);

onMounted(async () => {
  const uniqueId = uuidv4();
  const initialMessage: ChatMessage = {
    id: uniqueId,
    content: 'Hello! I appreciate your visit to my site. If there is anything you like to know more about me, please do not hesitate to ask. Thank you very much!',
    isTyping: false,
    isError: false,
    timestamp: new Date(),
    isBot: true,
    errorMessage: ''
  };
  chats.push(initialMessage);
  await asyncScrollDown();
});

const forceRerender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

const toggleChat = async () => {
  showChat.value = !showChat.value;
  await asyncScrollDown();
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
    isError: false,
    isTyping: true,
    timestamp: new Date(),
    isBot: true,
    errorMessage: ''
  };

  chats.push(bot);
  const existingEntryIndex = chats.findIndex(entry => entry.id === uniqueId);
  if (tooManyQuestion(message)) {
    console.log(message.length)
    if (existingEntryIndex !== -1) {
      const existingEntry = chats[existingEntryIndex];
      existingEntry.isTyping = false;
      existingEntry.isError = true;
      existingEntry.errorMessage = 'Ah, sorry about that! Its a bit of a bummer, but Im sticking to the minimum tokens. Would you mind making your question a little shorter?';
      return;
    }
  }

  try {
    const response = await askChatGpt(message);
    if (existingEntryIndex !== -1) {
      const existingEntry = chats[existingEntryIndex];
      existingEntry.isTyping = false;
      if (!response.error.isError) {
        existingEntry.content = response.answer;
      } else {
        existingEntry.errorMessage = response.error.errorMessage;
        existingEntry.isError = true;
      }
    }
  } catch (error) {
    console.error('Error fetching message from askChatGpt:', error);
    const existingEntryIndex = chats.findIndex(entry => entry.id === uniqueId);

    if (existingEntryIndex !== -1) {
      const existingEntry = chats[existingEntryIndex];
      existingEntry.errorMessage = `Error fetching message from askChatGpt`;
      existingEntry.isTyping = false;
      existingEntry.isError = true;
    }
  }

  await asyncScrollDown();
};
const tooManyQuestion = (str: string): boolean => {
  return str.length > 150;
}

const addUserMessage = (content: string) => {
  const uniqueId = uuidv4();
  const userMessage: ChatMessage = {
    id: uniqueId,
    content,
    isError: false,
    isTyping: false,
    timestamp: new Date(),
    isBot: false,
    errorMessage: ''
  };
  chats.push(userMessage);
};

const sendMessage = async () => {
  addUserMessage(message.value);
  await askBot(message.value);
  message.value = '';

};

const initializeConversation = async (messageContent: string) => {
  hidePreQuestions.value = true;
  addUserMessage(messageContent);
  await askBot(messageContent);

};

const checkTextAreaValidity = () => {
  isValidText.value = message.value.trim().length > 0;
};


onMounted(() => {
  updateFormattedDateTime();
  setInterval(updateFormattedDateTime, 30000); // Update every 30s
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

