<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 02</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
      @submit="handleSubmit"
    >
      <ApplyFormQuestionSpecificBdn
        v-for="question in bdnQuestionData"
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
import { bdnQuestionData } from '~/mocks/specific/bdn'
import type { BdnState } from '~/types/apply/specific/bdn-state'

const state = reactive<BdnState>({
  understandingExternalRelations: '',
  selfReflection: '',
  problemSolving: '',
  emailWriting: ''
})

const handleSubmit = () => {
  console.log(state)
}

const handleChange = (value: any, name: keyof BdnState) => {
  state[name] = value
}
</script>
