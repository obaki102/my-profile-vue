
<template>
  <main class="container">
    <section class="one">
      <h1>About Me</h1>
    </section>
    <section class="two">
      <h1>Projects</h1>
      <ProjectView></ProjectView>
    </section>
    <section class="three">
      <h1>????</h1>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProjectView from './ProjectView.vue'
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

section {
  width: 100%;
  height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
}

.one {
  background-color: rgb(29, 29, 61);
}

.two {
  background-color: rgb(21, 23, 34);
}

.three {
  background-color: rgb(28, 28, 141);
}
</style>