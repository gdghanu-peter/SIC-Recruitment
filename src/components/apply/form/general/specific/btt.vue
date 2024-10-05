<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <ApplyFormQuestionSpecificBtt
        v-for="question in bttQuestionData"
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
import { bttQuestionData } from '~/mocks/specific/btt'
import type { BttState } from '~/types/apply/specific/btt-state'

const state = reactive<BttState>({
  communicationRole: '',
  contentAttraction: '',
  mediaCampaign: '',
  messageInterpretation: ''
})

const handleSubmit = () => {
  console.log(state)
}

const handleChange = (value: any, name: keyof BttState) => {
  state[name] = value
}
</script>
