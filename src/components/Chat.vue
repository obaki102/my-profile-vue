<template>
  <div v-if="showChat" >
    <div class="fixed flex-col items-center bottom-20 right-10 bg-white rounded-md">
      <div class="flex flex-col items-center justify-center bg-blue-500 text-white rounded-t-md">
        <h2 class="text-lg font-semibold">Chat Bot</h2>

      </div>
      <button @click="ask" class="p-2 bg-blue-500 text-white rounded-full">
        Ask
      </button>
      <div class="flex flex-col overflow-auto w-80 h-96 items-center p-5">

        <div class="flex w-full mt-2 space-x-3 max-w-xs">
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p class="text-sm">{{ test }}</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
        </div>
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>

        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>

        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
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
