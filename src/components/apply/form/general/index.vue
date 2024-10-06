<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 01</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <ApplyFormQuestion
        v-for="question in generalQuestionData"
        :key="question.question"
        :image="question.image"
        :input-type="question.inputType"
        :placeholder="question.placeholder"
        :question="question.question"
        :required="question.required"
        :name="question.name"
        :basis="question.basis"
        @change="handleChange"
      />

      <UButton
        class="bg-form mx-auto uppercase mt-8"
        type="submit"
        size="lg"
        label="Tiếp theo"
      />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { GeneralState } from '~/types/apply/general-state'
import { generalQuestionData } from '~/mocks/general-form'
import { useChoice } from '~/stores/choice'
import { useIds } from '~/stores/id'
import { useRouter } from 'vue-router'
import { useForm } from '~/composables/useForm'

const choiceStore = useChoice()
const idStore = useIds()
const router = useRouter()

const state = reactive<GeneralState>({
  name: '',
  dob: new Date(),
  gender: 'Nam',
  highSchool: '',
  major: '',
  phoneNumber: '',
  email: '',
  facebook: '',
  avatar: '',
  extracurriculars: '',
  strengthsWeaknesses: '',
  uniqueness: '',
  futurePlans: '',
  photoThoughts: ''
})

const { generalForm } = useForm()

const handleSubmit = async () => {
  try {
    const res = await generalForm(state)

    idStore.setId(res[0].id)

    const firstChoice = choiceStore.first
    choiceStore.setFirst('')

    router.push(`/ttv/specific/${firstChoice}`)
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu:', error)
  }
}

const handleChange = (value: any, name: keyof GeneralState) => {
  state[name] = value
  console.log(value)
}
</script>
