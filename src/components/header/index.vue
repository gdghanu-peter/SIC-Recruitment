<template>
  <div
    class="fixed z-20 top-[80px] left-0 right-0 mx-auto rounded-full border px-[104px] py-4 gap-9 flex w-fit bg-white backdrop-blur-xl shadow-xl border-gray-300"
  >
    <HeaderItem
      v-for="link in links"
      :key="link.label"
      :label="link.label"
      :to="link.to"
    />
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
    to: '/ttv'
  },
  {
    label: 'KHÓA HỌC CHỨNG KHOÁN',
    to: '/course'
  },
  {
    label: 'CUỘC THI I-INVEST!',
    to: '/i-invest'
  }
])
</script>
