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
        name="eventPlanning"
        label="Theo em, những yếu tố đóng góp cho sự thành công của một sự kiện là gì? Em nghĩ yếu tố nào là quan trọng nhất?"
        class="w-full"
      >
        <UTextarea
          v-model="state.eventPlanning"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="riskTaking"
        label="Giữa việc phát triển một dự án sáng tạo nhưng rủi ro lớn với một dự án ít đột phá nhưng trong vùng an toàn, em sẽ chọn phương án nào? Giải thích sự lựa chọn của em."
        class="w-full"
      >
        <UTextarea
          v-model="state.riskTaking"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
       name="emotionalIntelligence"
        label="Trong bộ phim Inside Out 2, bộ máy cảm xúc của Riley được chi phối bởi 9 cảm xúc chính: Joy, Sadness, Disgust,  Anger, Fear, Anxiety, Envy, Ennui, Embarassment. Trong bộ máy cảm xúc của chính mình, em thấy bản thân được bộc lộ rõ nhất là qua cảm xúc nào? Nếu được chọn 2 cảm xúc để làm việc cùng trong thời gian chạy sự kiện, em sẽ chọn những cảm xúc nào? Vì sao?"
        class="w-full"
      >
        <UTextarea
          v-model="state.emotionalIntelligence"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="creativeExpression"
        label='Nếu em là một nhà hoạ sĩ, em sẽ vẽ bức tranh "Ban Sự Kiện" như thế nào?'
        class="w-full"
      >
        <UTextarea
        v-model="state.creativeExpression"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="philosophicalReflection"
        label='Theo em, con người sống với nhau vì điều gì?'
        class="w-full"
      >
        <UTextarea
        v-model="state.philosophicalReflection"
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
import { useChoice } from '~/stores/choice'
import type { BskState } from '~/types/apply/specific/bsk-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()
const router = useRouter()
const { formId } = useRoute().query
const state = reactive<BskState>({
  eventPlanning: '',
  riskTaking: '',
  emotionalIntelligence: '',
  creativeExpression: '',
  philosophicalReflection: ''
})

const errorMessage = 'Bạn cần điền vào trường này'

// Helper function to validate text areas with at least 2 characters
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

const validate = (state: BskState): FormError[] => {
  const errors: FormError[] = []
  
  validateField(state.eventPlanning, 'eventPlanning', errors)
  validateField(state.riskTaking, 'riskTaking', errors)
  validateField(state.emotionalIntelligence, 'emotionalIntelligence', errors)
  validateField(state.creativeExpression, 'creativeExpression', errors)
  validateField(state.philosophicalReflection, 'philosophicalReflection', errors)

  return errors
}

const { bskForm } = useForm()
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  const errors = validate(state)
  if (errors.length > 0) {
    // Handle errors (e.g., display error messages in UI)
    loading.value = false
    return
  }

  await bskForm(state, Number(formId))
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

