<template>
  <UContainer
    class="mt-[120px] py-6 md:pt-11 md:pb-20 rounded-[40px] shadow-lg bg-white/60"
  >
    <h1
      class="uppercase text-center text-glow-2 text-primary font-bold text-xl md:text-3xl"
    >
      Những sự kiện nổi bật
    </h1>
    <div class="mt-6 md:mt-[60px] mx-[20px] md:mx-[140px]">
      <UCarousel
        v-slot="{ item }"
        :items="events"
        class="w-full hidden md:block"
        :ui="{ item: 'basis-full', indicators: { active: 'bg-primary' } }"
        indicators
      >
        <NuxtImg :src="item" class="w-full" fit="contain" />
      </UCarousel>
      <UCarousel
        v-slot="{ item }"
        :items="events"
        class="w-full md:hidden"
        :ui="{ item: 'basis-full' }"
        :indicators="false"
      >
        <NuxtImg :src="item" class="w-full" fit="contain" />
      </UCarousel>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const events = ref([
  '/events/FINCHANCE!/_MG_9879.JPG',
  '/events/FINCHANCE!/_MG_9967.JPG',
  '/events/FINCHANCE!/_MG_0036.JPG',
  '/events/HYF/387752864_727625592722609_7024831832233601155_n.jpg',
  '/events/HYF/387759232_727624199389415_3084903941467199308_n.jpg',
  '/events/HYF/387746625_727630162722152_3760965220919649252_n.jpg',
  '/events/HYF/387751553_727627156055786_4445360985403011013_n.jpg',
  '/events/I-INVEST!/PMS_8134.JPG (1).png',
  '/events/I-INVEST!/PMS_8373.JPG (1).png',
  '/events/I-INVEST!/448647980_859115919579933_8801988290076204031_n.jpg',
  '/events/I-INVEST!/PMS_7876 (1).png',
  '/events/I-INVEST!/PMS_8131.JPG (1).png',
  '/events/SIG/11.jpg',
  '/events/SIG/07.jpg',
  '/events/SIG/10.png',
  '/events/STU/410386992_731040899051230_2075362832994794751_n.jpg',
  '/events/STU/408791780_727018549453465_4029016454082197901_n.jpg',
  '/events/STU/408861082_727018412786812_1094183018092890590_n.jpg'
])
</script>
