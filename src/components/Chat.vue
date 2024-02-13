<template>
  <div>
    <div v-if="showChat" class="fixed bottom-20 right-10 bg-white p-4 rounded-md shadow-md">
      <!-- Your chat content goes here -->
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-lg font-semibold">Chat Bot</h2>
        <!-- <button @click="closeChat" class="px-2 py-1 bg-blue-500 text-white rounded-md">X</button> -->
      </div>
      <button @click="ask" class="p-2 bg-blue-500 text-white rounded-full">
        Ask
      </button>
      <div class="flex flex-wrap w-25">{{test}}</div>

    
      <!-- Additional styling for input area or chat messages can be added here -->
    </div>
    <div class="py-10">
      <button @click="toggleChat" class="fixed bottom-5 right-10 p-2 bg-blue-500 text-white rounded-full">
        {{ showChat ? 'Close Chat' : 'Open Chat' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { askChatGpt } from '@/services/askChatGpt'

const showChat = ref(false);
const test = ref('')

const toggleChat = () => {
  showChat.value = !showChat.value;
};

const ask = async () => {
  const answer = await askChatGpt('Tell me about yourself?');
  test.value = answer
};


</script>
