<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 01</span>
    <UForm
      :state="state"
      :validate="validate"
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
      />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '~/composables/useForm'
import { generalQuestionData } from '~/mocks/general-form'
import { useChoice } from '~/stores/choice'
import type { GeneralState } from '~/types/apply/general-state'
import type { FormError } from '#ui/types'

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

const errorMessage = 'Bạn cần điền vào trường này'

const validate = (state: GeneralState): FormError[] => {
  const errors: FormError[] = []

  if (!state.name) errors.push({ path: 'name', message: errorMessage })
  if (!state.dob) errors.push({ path: 'dob', message: errorMessage })
  if (!state.gender) errors.push({ path: 'gender', message: errorMessage })
  if (!state.highSchool)
    errors.push({ path: 'highSchool', message: errorMessage })
  if (!state.phoneNumber)
    errors.push({ path: 'phoneNumber', message: errorMessage })
  if (!state.email) errors.push({ path: 'email', message: errorMessage })
  if (!state.extracurriculars)
    errors.push({ path: 'extracurriculars', message: errorMessage })
  if (!state.strengthsWeaknesses)
    errors.push({ path: 'strengthsWeaknesses', message: errorMessage })
  if (!state.uniqueness)
    errors.push({ path: 'uniqueness', message: errorMessage })
  if (!state.futurePlans)
    errors.push({ path: 'futurePlans', message: errorMessage })
  if (!state.photoThoughts)
    errors.push({ path: 'photoThoughts', message: errorMessage })

  return errors
}

const { generalForm } = useForm()

const handleSubmit = async () => {
  try {
    const res = await generalForm(state)

    const firstChoice = choiceStore.first
    choiceStore.setFirst('')

    router.replace(`/ttv/specific/${firstChoice}?formId=${res[0].id}`)
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu:', error)
  }
}

const handleChange = (value: any, name: keyof GeneralState) => {
  state[name] = value
}
</script>
