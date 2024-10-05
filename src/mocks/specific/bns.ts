import type { ApplyBnsQuestion } from '~/types/apply/question'

export const bnsQuestionData: ApplyBnsQuestion[] = [
  {
    question: 'Theo em, Ban Nhân sự trong CLB thực hiện những công việc gì?...',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'hrKnowledge',
    basis: '1'
  },
  {
    question:
      'Trong cuộc sống, bên cạnh những khoảnh khắc vui vẻ và may mắn...',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'personalReflection',
    basis: '1'
  },
  {
    question:
      '"Hình ảnh: Cốc nước giữa hồ nước. Em có suy nghĩ gì về bức hình này"',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '/forms/bns.PNG',
    name: 'creativeThinking',
    basis: '1'
  }
]
