<template>
  <UContainer class="flex my-10 justify-center">
    <UBreadcrumb :links="links" class="uppercase">
      <template #default="{ link }">
        <span class="font-bold text-xl">{{ link.label }}</span>
      </template>
    </UBreadcrumb>
  </UContainer>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Trang chủ',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Phần 01',
    icon: 'i-heroicons-link',
    to: '/ttv/general'
  },
  {
    label: 'Phần 02',
    icon: 'i-heroicons-link'
  }
]
</script>
