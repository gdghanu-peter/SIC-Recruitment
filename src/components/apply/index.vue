<template>
  <UContainer class="w-screen h-screen justify-center items-center flex">
    <div class="apply w-[600px] p-10 flex flex-col items-center">
      <h1 class="font-bold text-form text-2xl uppercase">
        Bạn chọn đăng ký vào ban
      </h1>
      <span class="text-sm italic text-gray-700">
        Lưu ý: Bạn chỉ được chọn TỐI ĐA 02 ban
      </span>
      <div class="flex flex-col gap-4 mt-8">
        <ApplyItem
          v-for="item in options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
          :is-selected="selectedItems.includes(item.value)"
          @select="handleSelect(item.value)"
        />
      </div>
      <nuxt-link to="/apply/general">
        <UButton
          trailing-icon="i-heroicons-arrow-right"
          color="red"
          variant="ghost"
          label="Bắt đầu"
          class="font-bold text-xl gap-2 mt-4"
          @click="handleSubmit"
        />
      </nuxt-link>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useChoice } from '~/stores/choice'

const options = ref([
  { label: 'Ban chuyên môn', value: 'bcm' },
  { label: 'Ban truyền thông', value: 'btt' },
  { label: 'Ban đối ngoại', value: 'bdn' },
  { label: 'Ban sự kiện', value: 'bsk' },
  { label: 'Ban nhân sự', value: 'bns' }
])

const selectedItems = ref<string[]>([])
const choiceStore = useChoice()

const handleSelect = (value: string) => {
  if (selectedItems.value.includes(value)) {
    selectedItems.value = selectedItems.value.filter((item) => item !== value)
  } else {
    if (selectedItems.value.length < 2) {
      selectedItems.value.push(value)
    }
  }
}

const handleSubmit = () => {
  if (selectedItems.value.length > 0) {
    choiceStore.setFirst(selectedItems.value[0])
    if (selectedItems.value.length > 1) {
      choiceStore.setSecond(selectedItems.value[1])
    } else {
      choiceStore.setSecond('')
    }
  }
}
</script>

<style lang="css" module>
.apply {
  border-radius: var(--Radius-200, 8px);
  background: url(<path-to-image>) lightgray -80.223px -273.895px / 124.295%
    149.325% no-repeat;
  box-shadow: 0px 11px 11.6px 0px rgba(125, 23, 49, 0.57);
}
</style>
