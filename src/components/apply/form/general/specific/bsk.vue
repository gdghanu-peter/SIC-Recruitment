<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8">Phần 02</span>
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px]"
      @submit="handleSubmit"
    >
      <template v-for="question in bskQuestionData" :key="question.name">
      <UFormGroup class="mb-8" :label="question.question" :name="question.name">
        <NuxtImg v-if="question.image" :src="question.image" alt="Question Image" class="mb-4 w-full h-auto rounded-lg" />

        <UTextarea
          v-model="state[question.name]"
          :type="question.inputType === 'textarea' ? 'textarea' : 'text'"
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

    <div class="float-right">
        <UButton class="bg-form uppercase mt-8" type="submit" size="lg" label="Hoàn thành" />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { bskQuestionData } from '~/mocks/specific/bsk';
import { useChoice } from '~/stores/choice';
import type { BskState } from '~/types/apply/specific/bsk-state';

const choiceStore = useChoice()

const router = useRouter()
const {formId} = useRoute().query
const { bskForm } = useForm()
const state = reactive<BskState>({
  eventPlanning: '',
  riskTaking: '',
  emotionalIntelligence: '',
  creativeExpression: '',
  philosophicalReflection: ''
})

const handleSubmit = async() => {
  await bskForm(state, Number(formId))
  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}


</script>
