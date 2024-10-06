<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <ApplyFormQuestionSpecificBns
        v-for="question in bnsQuestionData"
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
import { bnsQuestionData } from '~/mocks/specific/bns'
import type { BnsState } from '~/types/apply/specific/bns-state'
import { useRouter } from 'vue-router'
import { useChoice } from '~/stores/choice'

const choiceStore = useChoice()

const router = useRouter()

const state = reactive<BnsState>({
  hrKnowledge: '',
  personalReflection: '',
  creativeThinking: ''
})

const handleSubmit = () => {
  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}

const handleChange = (value: any, name: keyof BnsState) => {
  state[name] = value
}
</script>
