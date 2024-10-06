<template>
  <div
    class="w-[340px] h-[300px] rounded-xl shadow-xl relative overflow-hidden"
  >
    <div class="group-hover:hidden h-full">
      <NuxtImg class="object-cover w-full h-full" :src="image" />
      <div class="absolute w-full top-0 h-full bg-through opacity-70"></div>
      <span
        class="uppercase absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
        >{{ name }}</span
      >
    </div>
    <div
      class="group-hover:flex hidden flex-col gap-2 items-center bg-white h-full px-4 py-4"
    >
      <span class="text-2xl uppercase font-bold text-glow-1 text-primary">{{
        name
      }}</span>
      <span class="text-primary font-bold">
        {{ subtitle }}
      </span>
      <span class="text-justify text-sm">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ActivitiesItem } from '~/types/activities'

defineProps<ActivitiesItem>()
</script>
