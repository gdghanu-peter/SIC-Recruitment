<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px] flex flex-col gap-12 items-center"
      @submit="handleSubmit"
      :validate="validate"
    >
      <UFormGroup
        required
        name="understandingExternalRelations"
        label="Em hãy nêu hiểu biết của em về công việc của Ban Đối ngoại và bản thân em có những yếu tố gì để phù hợp với công việc này?"
        class="w-full"
      >
        <UTextarea
          v-model="state.understandingExternalRelations"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="selfReflection"
        label="Nếu ví bản thân em là một ca khúc, thì ca khúc ấy có tựa đề là gì? Vì sao?"
        class="w-full"
      >
        <UTextarea
          v-model="state.selfReflection"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="problemSolving"
        label="Khi được giao một nhiệm vụ mới mà em chưa có kinh nghiệm, em sẽ tiếp cận và giải quyết nó như thế nào?"
        class="w-full"
      >
        <UTextarea
          v-model="state.problemSolving"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup required name="emailWriting" label="" class="w-full">
        <NuxtImg src="/bdn.png" class="mx-auto my-2 md:h-[300px] h-[150px]" />
        <UTextarea
          v-model="state.emailWriting"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>

      <div class="flex justify-center">
        <UButton
          class="bg-form uppercase mt-8"
          type="submit"
          size="lg"
          label="Hoàn thành"
          :disabled="loading"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { bdnQuestionData } from '~/mocks/specific/bdn'
import { useChoice } from '~/stores/choice'
import type { BdnState } from '~/types/apply/specific/bdn-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()
const router = useRouter()
const { formId } = useRoute().query
const state = reactive<BdnState>({
  understandingExternalRelations: '',
  selfReflection: '',
  problemSolving: '',
  emailWriting: ''
})

const errorMessage = 'Bạn cần điền vào trường này'

// Helper function to validate text areas with at least 2 characters
const validateField = (field: string, fieldName: string, errors: FormError[]) => {
  if (!field.trim()) {
    errors.push({ path: fieldName, message: errorMessage })
  } else if (field.trim().length < 2) {
    errors.push({
      path: fieldName,
      message: 'Câu trả lời phải có ít nhất 2 ký tự'
    })
  }
}

const validate = (state: BdnState): FormError[] => {
  const errors: FormError[] = []
  
  validateField(state.understandingExternalRelations, 'understandingExternalRelations', errors)
  validateField(state.selfReflection, 'selfReflection', errors)
  validateField(state.problemSolving, 'problemSolving', errors)
  validateField(state.emailWriting, 'emailWriting', errors)

  return errors
}

const { bdnForm } = useForm()
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  await bdnForm(state, Number(formId))
  loading.value = false
  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}
</script>

