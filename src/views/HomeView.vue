<template>
  <!-- <div class="flex content-center justify-end about p-10">
    <button
      class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
      @click="scrollTo(projects)">Projects</button>

    <button
      class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block rounded hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
      @click="scrollTo(contact)">Contact</button>
  </div> -->
  <div class="fullpage-container">

    <div class="fullpage-slide home">
      <div class="slide-content ">
        <transition enter-active-class="transition duration-1000" enter-from-class="opacity-0"
          enter-to-class="opacity-100 animate-fade-in-smoke">
           <AboutMeView v-if="showText"></AboutMeView>
        </transition>
      </div>
    </div>
    <div class="fullpage-slide project">
      <div class="slide-content">
        <ProjectView />
      </div>
    </div>
    <div class="fullpage-slide">
      <div class="slide-content bg-gray-100">
        <ContactView />
      </div>
    </div>
    <ChatView />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AboutMeView from './AboutMeView.vue';
import ContactView from './ContactView.vue';
import ProjectView from './ProjectView.vue';
import ChatView from './ChatView.vue';

const [about, projects, contact] = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];
const showText = ref(false);
onMounted(() => {
  setTimeout(() => {
    showText.value = true;
  }, 1000);
});

function scrollTo(view: HTMLElement | null) {
  if (view)
    view.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.fullpage-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
}

.fullpage-slide {
  height: 100vh;
  scroll-snap-align: start;
}

.slide-content {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home {
  background-color: #0D1117;
}

.project {
  background-color: #161B22;
}

.contact {
  background-color: #ffed4a;
}

.animate-fade-in-smoke {
  animation: fade-in-smoke 1s ease-out forwards;
}

@keyframes fade-in-smoke {
  0% {
    opacity: 0;
    transform: scale(0.5);
    filter: blur(10px);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
    filter: blur(5px);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}
</style>
