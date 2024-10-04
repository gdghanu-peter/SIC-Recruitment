<template>
  <div class="rounded-full border px-[104px] py-4 gap-9 flex w-fit bg-white border-gray-300">
    <HeaderItem v-for="link in links" :key="link.label" :label="link.label" :to="link.label" />
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    label: 'CLB CHỨNG KHOÁN SIC',
    to: '/sic-securities-club'
  },
  {
    label: 'TUYỂN THÀNH VIÊN',
    to: '/recruitment'
  },
  {
    label: 'KHÓA HỌC CHỨNG KHOÁN',
    to: '/course'
  },
  {
    label: 'CUỘC THI I-INVEST!',
    to: '/i-invest'
  },
])
</script>