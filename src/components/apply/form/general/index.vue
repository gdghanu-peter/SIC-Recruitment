<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 01</span>
    <UForm
      :state="state"
      class="lg:w-[820px] w-[400px] flex flex-col lg:flex-row lg:flex-wrap"
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
        :disabled="loading"
      />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '~/composables/useForm'
import { generalQuestionData } from '~/mocks/general-form'
import { useChoice } from '~/stores/choice'
import type { GeneralState } from '~/types/apply/general-state'

const choiceStore = useChoice()
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
const errors = reactive<Record<keyof GeneralState, string>>(
  {} as Record<keyof GeneralState, string>
)


const { generalForm } = useForm()

const loading = ref(false)

const handleSubmit = async () => {
 

  loading.value = true
  try {
    const res = await generalForm(state)

    const firstChoice = choiceStore.first
    choiceStore.setFirst('')

    router.replace(`/ttv/specific/${firstChoice}?formId=${res[0].id}`)
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu:', error)
    loading.value = false
  }
}

const handleChange = (value: any, name: keyof GeneralState) => {
  state[name] = value
}
</script>
