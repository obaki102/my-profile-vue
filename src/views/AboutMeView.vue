<template>
  <div class="flex flex-col m-5">
    <div class="text-2xl font-extrabold leading-none tracking-tight text-white mb-20 md:text-4xl">
      <span
        className="inline-flex pt-2 overflow-x-hidden overflow-y-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
        Hi, I'm Josh 👋
      </span>
      <p>Just a regular .NET developer who loves exploring new stuff.</p>
    </div>

    <div class="flex  flex-wrap">
      <div class="skill animate">
        <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/skill-logo/c-sharp.svg"
          title="C#" />
      </div>
      <div class="skill animate">
        <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/skill-logo/azure.svg"
          title="Azure" />
      </div>
      <div class="skill animate">
        <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/skill-logo/dotnet.svg"
          title=".NET" />
      </div>
      <div class="skill animate">
        <img class="object-cover h-10 w-10 mr-5 transition duration-300 hover:translate-x-2"
          src="/src/assets/skill-logo/power-apps.svg" title="Power Apps" />
      </div>
      <div class="skill animate">
        <img class="object-cover h-10 w-10 mr-5 transition duration-300 hover:translate-x-2"
          src="/src/assets/skill-logo/power-automate.svg" title="Power Automate" />
      </div>
      <div class="skill animate">
        <img class="object-cover h-10 w-10 mr-5 transition duration-300 hover:translate-x-2"
          src="/src/assets/skill-logo/power-bi.svg" title="Power BI" />
      </div>
      <div class="skill animate">
        <img class="object-cover h-10 w-10 transition duration-300 hover:translate-x-2"
          src="/src/assets/skill-logo/vue-js.svg" title="Vue Js" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
.will-change-transform {
  will-change: transform;
}

.skill {
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate:nth-child(1) {
  animation: slide-in 2s forwards;
  animation-delay: 0s;
}

.animate:nth-child(2) {
  animation: slide-in 2s forwards;
  animation-delay: 0.5s;
}

.animate:nth-child(3) {
  animation: slide-in 2s forwards;
  animation-delay: 1s;
}

.animate:nth-child(4) {
  animation: slide-in 2s forwards;
  animation-delay: 1.5s;
}

.animate:nth-child(5) {
  animation: slide-in 2s forwards;
  animation-delay: 2s;
}

.animate:nth-child(6) {
  animation: slide-in 2s forwards;
  animation-delay: 2.5s;
}
.animate:nth-child(7) {
  animation: slide-in 2s forwards;
  animation-delay: 3s;
}
</style>
