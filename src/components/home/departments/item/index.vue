<template>
  <div class="items-center flex gap-10" :class="reverse && 'flex-row-reverse'">
    <div>
      <CommonSignatureText :content="name" />
      <div class="h-[3px] bg-primary w-full my-8"></div>
      <p class="text-primary text-glow-1 font-bold leading-loose text-justify">
        {{ description }}
      </p>
    </div>
    <NuxtImg :src="image" class="w-1/2" />
  </div>
</template>

<script setup lang="ts">
import type { DepartmentsItem } from '~/types/departments'

defineProps<DepartmentsItem>()
</script>
