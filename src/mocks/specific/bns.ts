import type { ApplyBnsQuestion } from '~/types/apply/question'

export const bnsQuestionData: ApplyBnsQuestion[] = [
  {
    question: 'Theo em, Ban Nhân sự trong CLB thực hiện những công việc gì? Em hãy nêu ba rủi ro có thể xảy ra với đầu việc Ban Nhân sự. Nếu có thể, hãy đưa ra hướng giải quyết hợp lý nhất cho trường hợp rủi ro đó.',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'hrKnowledge',
    basis: '1'
  },
  {
    question:
      'Trong cuộc sống, bên cạnh những khoảnh khắc vui vẻ và may mắn, chắc hẳn ai cũng có những giây phút lạc lối hay vấp ngã. Cá nhân em, em đã bao giờ phải hối hận về những quyết định của mình từ trước đến nay chưa? Nếu có, hãy kể cho anh chị nghe được không?',
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
    image: '/bns.png',
    name: 'creativeThinking',
    basis: '1'
  }
]
