<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8">Phần 02</span>
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px]"
      @submit="handleSubmit"
    >
      <template v-for="question in bttQuestionData" :key="question.name">
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
import { bttQuestionData } from '~/mocks/specific/btt';
import { useChoice } from '~/stores/choice';
import type { BttState } from '~/types/apply/specific/btt-state';
const choiceStore = useChoice()

const router = useRouter()
const {formId} = useRoute().query

const { bttForm } = useForm()

const state = reactive<BttState>({
  communicationRole: '',
  contentAttraction: '',
  mediaCampaign: '',
  messageInterpretation: ''
})

const handleSubmit = async () => {
 await bttForm(state, Number(formId))
  
  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}


</script>
