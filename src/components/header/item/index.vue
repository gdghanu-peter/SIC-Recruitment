<template>
  <nuxt-link :to="to">
    <span class="font-bold text-sm text-black text-hover-primary">{{
      label
    }}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { HeaderItem } from '~/types/header'

defineProps<HeaderItem>()
</script>
