<template>
  <div class="flex flex-col p-20">
      <div class="text-2xl font-extrabold leading-none tracking-tight text-white mb-20 md:text-4xl">
      <h1>
        <span
          className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
          Hi, I'm Josh 👋
        </span>
        <span
          className="box-border inline-block w-1 h-10 ml-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
      <p>Just a regular .NET developer who loves exploring new stuff.</p>
    </div>

    <div class="flex  flex-wrap">
      <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/c-sharp.svg"
        title="C#" />
      <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/azure.svg"
        title="Azure" />
      <img class="object-fill h-10 w-10 mr-5 transition duration-300 hover:translate-x-2" src="/src/assets/dotnet.svg"
        title=".NET" />
      <img class="object-cover h-10 w-10 mr-5 transition duration-300 hover:translate-x-2"
        src="/src/assets/PowerApps_scalable.svg" title="Power Apps" />
      <img class="object-cover h-10 w-10 mr-5 transition duration-300 hover:translate-x-2"
        src="/src/assets/PowerAutomate_scalable.svg" title="Power Automate" />
      <img class="object-cover h-10 w-10 transition duration-300 hover:translate-x-2"
        src="/src/assets/PowerBI_scalable.svg" title="Power BI" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
.will-change-transform {
  will-change: transform;
}
</style>
