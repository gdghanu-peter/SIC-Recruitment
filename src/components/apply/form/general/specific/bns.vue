<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <template v-for="question in bnsQuestionData" :key="question.name">
      <UFormGroup :label="question.question" :name="question.name">
        <NuxtImg v-if="question.image" :src="question.image" alt="Question Image" class="mb-4 w-full h-auto rounded-lg" />

        <UInput
          v-model="state[question.name]"
          :type="question.inputType === 'textarea' ? 'textarea' : 'text'"
          :placeholder="question.placeholder"
        />
      </UFormGroup>
    </template>

      <div class="flex mx-auto gap-6">
        <UButton
          class="bg-form-back mx-auto uppercase mt-8"
          size="lg"
          label="Quay lại"
        />
        <UButton
          class="bg-form mx-auto uppercase mt-8"
          type="submit"
          size="lg"
          label="Tiếp theo"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { bnsQuestionData } from '~/mocks/specific/bns';
import { useChoice } from '~/stores/choice';
import type { BnsState } from '~/types/apply/specific/bns-state';

const choiceStore = useChoice()

const router = useRouter()
const {formId} = useRoute().query
const { bnsForm } = useForm()
const state = reactive<BnsState>({
  hrKnowledge: '',
  personalReflection: '',
  creativeThinking: ''
})

const handleSubmit = async() => {
  await bnsForm(state, Number(formId))
  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}


</script>
