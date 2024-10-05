<template>
  <div
    class="w-[340px] h-[250px] rounded-xl shadow-xl relative overflow-hidden"
  >
    <NuxtImg class="object-cover w-full h-full" :src="image" />
    <div class="absolute w-full top-0 h-full bg-through opacity-70"></div>
    <span
      class="uppercase absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
      >{{ name }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { ActivitiesItem } from '~/types/activities'

defineProps<ActivitiesItem>()
</script>
