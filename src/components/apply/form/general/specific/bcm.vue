<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl mb-8">Phần 02</span>
    <UForm
      :state="state"
      @submit="handleSubmit"
      class="lg:w-[820px] w-[400px] flex flex-col items-center gap-12"
    >
      <UFormGroup
        required
        name="logicalThinking"
        label="Em hãy điền đáp án ô (?) và giải thích quy luật dưới 100 chữ:"
        class="w-full"
      >
        <NuxtImg
          src="/forms/bcm.png"
          class="mx-auto my-2 md:h-[300px] h-[150px]"
        />
        <UTextarea
          v-model="state.logicalThinking"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="decisionMaking"
        label="Em sẽ lựa chọn trở thành cổ đông sở hữu 10% cổ phần công ty có giá trị 100 triệu USD hay là sở hữu 50% cổ phần công ty có giá trị 20 triệu USD? Tại sao?"
        class="w-full"
      >
        <UTextarea
          v-model="state.decisionMaking"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="financialPlanning"
        label="Nếu trúng xổ số với tổng giá trị 3 tỷ VNĐ, em sẽ sử dụng số tiền đó như thế nào?"
        class="w-full"
      >
        <UTextarea
          v-model="state.financialPlanning"
          placeholder="Hãy nhập câu trả lời của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>

      <div class="mx-auto">
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
import type { BcmState } from '~/types/apply/specific/bcm-state'
import type { FormError } from '#ui/types'

const choiceStore = useChoice()
const router = useRouter()
const { formId } = useRoute().query

const state = reactive<BcmState>({
  logicalThinking: '',
  decisionMaking: '',
  financialPlanning: ''
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

const validate = (state: BcmState): FormError[] => {
  const errors: FormError[] = []
  
  validateField(state.logicalThinking, 'logicalThinking', errors)
  validateField(state.decisionMaking, 'decisionMaking', errors)
  validateField(state.financialPlanning, 'financialPlanning', errors)

  return errors
}

const { bcmForm } = useForm()
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  const errors = validate(state)
  if (errors.length > 0) {
    // Handle errors (e.g., display error messages in UI)
    loading.value = false
    return
  }
  
  await bcmForm(state, Number(formId))

  if (choiceStore.second === '') {
    router.push('/ttv/thankyou')
  } else {
    const secondChoice = choiceStore.second
    choiceStore.setSecond('')
    router.push(`/ttv/specific/${secondChoice}`)
  }
}
</script>

