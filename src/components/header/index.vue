<template>
  <div
    class="fixed z-20 top-[80px] hidden md:flex left-0 right-0 mx-auto rounded-full border px-10 lg:px-[104px] py-4 gap-9 flex w-fit bg-white backdrop-blur-xl shadow-xl border-gray-300"
  >
    <HeaderItem
      v-for="link in links"
      :key="link.label"
      :label="link.label"
      :to="link.to"
    />
  </div>
  <div class="w-full fixed top-0 md:hidden z-20 w-full bg-white h-16">
    <div class="w-full relative top-0 w-full h-full flex items-center">
      <UButton
        name="i-heroicons-bars-3-bottom-left"
        class="relative text-primary"
        variant="ghost"
        size="xl"
        color="white"
        @click="toggleMenu"
        label="Menu"
      />
    </div>
    <div class="flex flex-col absolute bg-white pl-4 w-full">
      <HeaderItem
        v-for="link in links"
        :key="link.label"
        :label="link.label"
        :to="link.to"
        :class="!isMenuOpen && 'hidden'"
        class="py-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    label: 'CLB CHỨNG KHOÁN SIC',
    to: '/'
  },
  {
    label: 'TUYỂN THÀNH VIÊN',
    to: '/ttv'
  },
  {
    label: 'KHÓA HỌC CHỨNG KHOÁN',
    to: '/startup'
  },
  {
    label: 'CUỘC THI I-INVEST!',
    to: '/i-invest'
  }
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
