<template>
  <div
    class="items-center flex-col mt-10 lg:mt-0 mx-10 lg:mx-0 lg:flex-row flex gap-10"
    :class="reverse && 'lg:flex-row-reverse'"
  >
    <div>
      <CommonSignatureText :content="name" class="text-xl md:text-4xl" />
      <div class="h-[3px] bg-primary w-full my-8"></div>
      <p
        class="text-primary text-glow-1 font-bold text-sm md:text-base leading-normal md:leading-loose text-justify"
      >
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
