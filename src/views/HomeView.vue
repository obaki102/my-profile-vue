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
        <AboutMeView />
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
import { ref } from 'vue';
import AboutMeView from './AboutMeView.vue';
import ContactView from './ContactView.vue';
import ProjectView from './ProjectView.vue';
import ChatView from './ChatView.vue';

let currentSlide = ref(0);

const [about, projects, contact] = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];

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
</style>
