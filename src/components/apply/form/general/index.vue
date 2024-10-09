<template>
  <div class="mt-8 pb-[100px] flex flex-col items-center">
    <span class="uppercase text-form-grow font-bold text-3xl">Phần 01</span>
    <UForm
      :state="state"
      class="w-[410px] lg:w-[820px] flex flex-col items-center gap-12"
      @submit="handleSubmit"
    >
      <UFormGroup required name="name" label="Họ và tên" class="w-full">
        <UInput
          size="md"
          placeholder="Hãy nhập đầy đủ họ tên của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup required name="dob" label="Ngày sinh" class="w-full">
        <UInput size="md" color="pink" type="date" />
      </UFormGroup>
      <UFormGroup required name="gender" label="Giới tính" class="w-full">
        <URadioGroup :options="genderOptions" color="red" />
      </UFormGroup>
      <UFormGroup
        required
        name="highSchool"
        label="Trường THPT bạn đã theo học"
        class="w-full"
      >
        <UInput
          size="md"
          placeholder="Hãy nhập tên trường THPT của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="major"
        label="Chuyên ngành bạn đang theo học"
        class="w-full"
      >
        <UInput
          size="md"
          placeholder="Ví dụ: Anh 01 - CLC KDQT - K63"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="phoneNumber"
        label="Số điện thoại liên hệ"
        class="w-full"
      >
        <UInput
          size="md"
          placeholder="Hãy nhập số điện thoại của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup required name="email" label="Địa chỉ email" class="w-full">
        <UInput
          size="md"
          placeholder="Hãy nhập địa chỉ email của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup required name="facebook" label="Link Facebook" class="w-full">
        <UInput
          size="md"
          placeholder="Hãy đính link Facebook của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="avatar"
        label="File ảnh cá nhân (chú ý mở quyền truy cập)"
        class="w-full"
      >
        <UInput
          size="md"
          placeholder="Hãy upload một bức ảnh cá nhân của bạn"
          color="pink"
          class="bg-white rounded-lg"
        />
      </UFormGroup>
      <UFormGroup
        required
        name="extracurriculars"
        label="Bạn từng tham gia hoạt động ngoại khóa trước đây chưa? (Nếu có hãy nêu rõ: Tên sự kiện - Vai trò - Thành tích)"
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
        name="extracurriculars"
        label="Bạn từng tham gia hoạt động ngoại khóa trước đây chưa? (Nếu có hãy nêu rõ: Tên sự kiện - Vai trò - Thành tích)"
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
        name="strengthsWeaknesses"
        label="Nêu 2 điểm mạnh và 2 điểm yếu của bản thân. Những điểm mạnh này giúp gì cho bạn trong cuộc sống? Bạn dự định sẽ làm gì trong tương lai để khắc phục những điểm yếu đó?"
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
        name="uniqueness"
        label="Giữa hàng trăm đơn ứng tuyển vào SIC mỗi năm, em cảm thấy điều gì khiến mình đặc biệt và nổi trội hơn các bạn ứng viên khác?"
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
        name="futurePlans"
        label="Nếu được trở thành thành viên của câu lạc bộ, định hướng phát triển của em trong 2 năm tới là gì? Em mong muốn nhận lại được những gì nếu có cơ hội trở thành thành viên chính thức của CLB Chứng khoán SIC?"
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
        name="photoThoughts"
        label="Nêu suy nghĩ của em về bức ảnh này."
        class="w-full"
      >
        <NuxtImg
          src="/forms/general.png"
          class="mx-auto my-2 md:h-[300px] h-[150px]"
        />
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
import { useForm } from '~/composables/useForm'
import { useChoice } from '~/stores/choice'
import type { GeneralState } from '~/types/apply/general-state'

const choiceStore = useChoice()
const router = useRouter()

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

const errorMessage = 'Bạn cần điền vào trường này'

const genderOptions = ref([
  {
    value: 'Nam',
    label: 'Nam'
  },
  {
    value: 'Nữ',
    label: 'Nữ'
  }
])

const { generalForm } = useForm()

const loading = ref(false)

const handleSubmit = async () => {
  try {
    loading.value = true
    const res = await generalForm(state)
    loading.value = false

    const firstChoice = choiceStore.first
    choiceStore.setFirst('')

    router.replace(`/ttv/specific/${firstChoice}?formId=${res[0].id}`)
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu:', error)
  }
}

const handleChange = (value: any, name: keyof GeneralState) => {
  state[name] = value
}
</script>
