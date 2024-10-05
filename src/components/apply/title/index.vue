<template>
  <UContainer class="mt-6">
    <h1
      class="text-form text-form-grow text-3xl text-center uppercase font-bold"
    >
      {{ title }}
    </h1>
  </UContainer>
</template>

<script setup lang="ts">
import type { ApplyTitle } from '~/types/apply/title'

const props = defineProps<ApplyTitle>()

const title = computed(() => {
  return `Đăng ký ${props.department}`
})
</script>
