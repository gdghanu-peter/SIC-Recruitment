<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <ApplyFormQuestionSpecificBsk
        v-for="question in bskQuestionData"
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
import { bskQuestionData } from '~/mocks/specific/bsk'
import type { BskState } from '~/types/apply/specific/bsk-state'

const state = reactive<BskState>({
  eventPlanning: '',
  riskTaking: '',
  emotionalIntelligence: '',
  creativeExpression: '',
  philosophicalReflection: ''
})

const handleSubmit = () => {
  console.log(state)
}

const handleChange = (value: any, name: keyof BskState) => {
  state[name] = value
}
</script>
