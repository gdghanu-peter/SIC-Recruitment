<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 01</span>
    <UForm
      :state="state"
      class="w-[820px] flex flex-wrap"
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
import type { GeneralState } from '~/types/apply/general-state'
import { generalQuestionData } from '~/mocks/general-form'
import { useGeneralStore } from '~/stores/general'
import type { ApplyTitle } from '~/types/apply/title'

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

const generalStore = useGeneralStore()

const handleSubmit = () => {
  generalStore.setName(state.name)
  generalStore.setDob(state.dob)
  generalStore.setGender(state.gender)
  generalStore.setHighSchool(state.highSchool)
  generalStore.setMajor(state.major)
  generalStore.setPhoneNumber(state.phoneNumber)
  generalStore.setEmail(state.email)
  generalStore.setFacebook(state.facebook)
  generalStore.setAvatar(state.avatar)
  generalStore.setExtracurriculars(state.extracurriculars)
  generalStore.setStrengthsWeaknesses(state.strengthsWeaknesses)
  generalStore.setUniqueness(state.uniqueness)
  generalStore.setFuturePlans(state.futurePlans)
  generalStore.setPhotoThoughts(state.photoThoughts)

  console.log('Dữ liệu đã lưu vào store:', generalStore.$state)
}

const handleChange = (value: any, name: keyof GeneralState) => {
  state[name] = value
  console.log(value)
}
</script>
