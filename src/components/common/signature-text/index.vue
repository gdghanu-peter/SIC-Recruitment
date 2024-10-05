<template>
  <h1 class="text-signature text-5xl drop-shadow-xl text-primary content">
    {{ content }}
  </h1>
</template>

<script setup lang="ts">
import type { SignatureText } from '~/types/signature-text'

defineProps<SignatureText>()
</script>

<style lang="css" scoped>
.content {
  text-shadow: 0px 2px 2px rgba(86, 0, 0, 0.25);
}
</style>
