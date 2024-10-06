<template>
 <div>
    <ApplyHeader />
    <ApplySlogan />
    <ApplyTitle :department="title" />
    <ApplyFormGeneralSpecificBcm v-if="department === 'bcm'" />
    <ApplyFormGeneralSpecificBdn v-if="department === 'bdn'" />
    <ApplyFormGeneralSpecificBns v-if="department === 'bns'" />
    <ApplyFormGeneralSpecificBsk v-if="department === 'bsk'" />
    <ApplyFormGeneralSpecificBtt v-if="department === 'btt'" />
 </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'form'
})

const list = [
  {
    department: 'btt',
    title: 'Ban truyền thông'
  },
  {
    department: 'bcm',
    title: 'Ban chuyên môn'
  },
  {
    department: 'bsk',
    title: 'Ban sự kiện'
  },
  {
    department: 'bns',
    title: 'Ban nhân sự'
  },
  {
    department: 'bdn',
    title: 'Ban đối ngoại'
  }
]

const route = useRoute()
const department = route.params.department
const title = computed(() => {
  return list.find((e) => e.department === department)?.title || ''
})
</script>
