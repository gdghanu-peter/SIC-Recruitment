<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8"
      >Phần 02</span
    >
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px] flex flex-col items-center gap-12"
      @submit="handleSubmit"
      :validate="validate"
    >
      <UFormGroup
        required
        name="hrKnowledge"
        label="Theo em, Ban Nhân sự trong CLB thực hiện những công việc gì? Em hãy nêu ba rủi ro có thể xảy ra với đầu việc Ban Nhân sự. Nếu có thể, hãy đưa ra hướng giải quyết hợp lý nhất cho trường hợp rủi ro đó."
        class="w-full"
      >
        <UTextarea
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="personalReflection"
        label="Trong cuộc sống, bên cạnh những khoảnh khắc vui vẻ và may mắn, chắc hẳn ai cũng có những giây phút lạc lối hay vấp ngã. Cá nhân em, em đã bao giờ phải hối hận về những quyết định của mình từ trước đến nay chưa? Nếu có, hãy kể cho anh chị nghe được không?"
        class="w-full"
      >
        <UTextarea
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="creativeThinking"
        label="Hình ảnh: Cốc nước giữa hồ nước. Em có suy nghĩ gì về bức hình này"
        class="w-full"
      >
        <NuxtImg class="my-2 md:h-[300px] h-[150px] mx-auto" src="/bns.png" />
        <UTextarea
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
import { bnsQuestionData } from '~/mocks/specific/bns'
import { useChoice } from '~/stores/choice'
import type { BnsState } from '~/types/apply/specific/bns-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()
const router = useRouter()
const { formId } = useRoute().query
const state = reactive<BnsState>({
  hrKnowledge: '',
  personalReflection: '',
  creativeThinking: ''
})

const errorMessage = 'Bạn cần điền vào trường này'

const validate = (state: BnsState): FormError[] => {
  const errors = []
  if (!state.hrKnowledge)
    errors.push({ path: 'hrKnowledge', message: errorMessage })
  if (!state.personalReflection)
    errors.push({ path: 'personalReflection', message: errorMessage })
  if (!state.creativeThinking)
    errors.push({ path: 'creativeThinking', message: errorMessage })
  return errors
}

const { bnsForm } = useForm()
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  await bnsForm(state, Number(formId))
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
