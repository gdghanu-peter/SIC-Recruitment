<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8"
      >Phần 02</span
    >
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px] flex flex-col items-center gap-12"
      @submit="handleSubmit"
    >
      <UFormGroup
        required
        name="communicationRole"
        label="Theo em, vai trò của Ban Truyền thông trong CLB là gì?"
        class="w-full"
      >
        <UTextarea
          v-model="state.communicationRole"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="contentAttraction"
        label="Em bị thu hút bởi một bài đăng/content như thế nào?"
        class="w-full"
      >
        <UTextarea
          v-model="state.contentAttraction"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="mediaCampaign"
        label="Em ấn tượng với chiến dịch truyền thông hay hoạt động truyền thông nào trên nền tảng xã hội? Hãy cho anh/chị biết lí do vì sao em ấn tượng nhé."
        class="w-full"
      >
        <UTextarea
          v-model="state.mediaCampaign"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="messageInterpretation"
        label="Theo em, bức ảnh dưới đây đang muốn truyền tải thông điệp gì? Hãy diễn tả lại thông điệp đó dưới góc nhìn của mình bằng bất cứ chất liệu nào mà mình muốn nhé (văn xuôi, thơ,...)"
        class="w-full"
      >
        <NuxtImg src="/btt.png" class="mx-auto md:h-[300px] h-[150px] my-2" />
        <UTextarea
          v-model="state.messageInterpretation"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <div class="flex justify-center">
        <UButton
          class="bg-form mx-auto uppercase mt-8"
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
import { useChoice } from '~/stores/choice'
import type { BttState } from '~/types/apply/specific/btt-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()
const router = useRouter()
const { formId } = useRoute().query

const { bttForm } = useForm()

const state = reactive<BttState>({
  communicationRole: '',
  contentAttraction: '',
  mediaCampaign: '',
  messageInterpretation: ''
})

const errorMessage = 'Bạn cần điền vào trường này'

// Helper function to validate fields with at least 2 characters
const validateField = (field: string, fieldName: string, errors: FormError[]) => {
  if (!field.trim()) {
    errors.push({ path: fieldName, message: errorMessage })
  } else if (field.trim().length < 2) {
    errors.push({
      path: fieldName,
      message: 'Câu trả lời phải có ít nhất 2 ký tự'
    })
  }
}

const validate = (state: BttState): FormError[] => {
  const errors: FormError[] = []

  validateField(state.communicationRole, 'communicationRole', errors)
  validateField(state.contentAttraction, 'contentAttraction', errors)
  validateField(state.mediaCampaign, 'mediaCampaign', errors)
  validateField(state.messageInterpretation, 'messageInterpretation', errors)

  return errors
}

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  const errors = validate(state)
  if (errors.length > 0) {
    // Handle errors (e.g., display error messages in UI)
    loading.value = false
    return
  }

  await bttForm(state, Number(formId))
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

