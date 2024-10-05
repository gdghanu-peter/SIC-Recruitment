<template>
  <div
    :class="[
      'rounded-full flex hover:bg-pink-400 justify-center cursor-pointer px-8 py-4',
      {
        'bg-red-500': isSelected,
        'bg-gray-300': !isSelected,
        'bg-form': isSelected
      }
    ]"
    @click="$emit('select')"
  >
    <span class="font-bold text-white text-xl">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ApplyItem } from '~/types/apply/item'

const props = defineProps<ApplyItem & { isSelected: boolean }>()
</script>
