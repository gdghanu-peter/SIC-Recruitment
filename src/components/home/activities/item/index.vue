<template>
  <div
    class="w-[300px] md:w-[340px] h-[260px] md:h-[300px] rounded-xl shadow-xl relative overflow-hidden group"
  >
    <div
      class="group-hover:hidden h-full transition-opacity duration-300 opacity-100"
    >
      <NuxtImg class="object-cover w-full h-full" :src="image" />
      <div class="absolute w-full top-0 h-full bg-through opacity-70"></div>
      <span
        class="uppercase absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold"
        >{{ name }}</span
      >
    </div>

    <div
      class="group-hover:flex hidden flex-col gap-2 items-center bg-white h-full px-4 py-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
    >
      <span
        class="text-lg md:text-2xl uppercase font-bold text-glow-1 text-primary"
        >{{ name }}</span
      >
      <span class="text-primary text-center text-sm md:text-base font-bold">
        {{ subtitle }}
      </span>
      <span class="text-justify text-xs md:text-sm">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ActivitiesItem } from '~/types/activities'

defineProps<ActivitiesItem>()
</script>
