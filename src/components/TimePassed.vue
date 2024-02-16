
<template>
  <span class="text-xs text-gray-500 leading-none mt-2">{{ formattedTime }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  timestamp: Date
}>();


const formattedTime = computed(() => {
  const currentTime: number = new Date().getTime();
  const messageTime: number = props.timestamp.getTime();
  const differenceInSeconds: number = Math.floor((currentTime - messageTime) / 1000);

  return formatTimeDifference(differenceInSeconds);
});

function formatTimeDifference(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}


</script>
