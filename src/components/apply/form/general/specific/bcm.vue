<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8"
      >Phần 02</span
    >
    <UForm
      :state="state"
      @submit="handleSubmit"
      :validate="validate"
      class="lg:w-[820px] w-[400px] flex flex-col lg:flex-row lg:flex-wrap"
    >
      <template v-for="question in bcmQuestionData" :key="question.name">
        <UFormGroup
          class="w-full mb-8"
          :label="question.question"
          :name="question.name"
        >
          <NuxtImg
            v-if="question.image"
            :src="question.image"
            alt="Question Image"
            class="mb-4 w-auto mx-auto max-h-[200px] rounded-lg"
          />
          <UTextarea
            v-model="state[question.name]"
            :placeholder="question.placeholder"
            :ui="{
              rounded: 'rounded-lg',
              placeholder: 'italic',
              color: {
                white: {
                  outline:
                    'shadow-sm bg-white text-gray-900 ring-primary ring-2 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-400'
                }
              }
            }"
          />
        </UFormGroup>
      </template>

      <div class="mx-auto">
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
import { bcmQuestionData } from '~/mocks/specific/bcm'
import { useChoice } from '~/stores/choice'
import type { BcmState } from '~/types/apply/specific/bcm-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()

const router = useRouter()
const { formId } = useRoute().query
const state = reactive<BcmState>({
  logicalThinking: '',
  decisionMaking: '',
  financialPlanning: ''
})

const errorMessage = 'Bạn cần điền vào trường này'

const validate = (state: BcmState): FormError[] => {
  const errors = []
  if (!state.logicalThinking)
    errors.push({ path: 'logicalThinking', message: errorMessage })
  if (!state.decisionMaking)
    errors.push({ path: 'decisionMaking', message: errorMessage })
  if (!state.financialPlanning)
    errors.push({ path: 'financialPlanning', message: errorMessage })
  return errors
}

const { bcmForm } = useForm()
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  await bcmForm(state, Number(formId))
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
