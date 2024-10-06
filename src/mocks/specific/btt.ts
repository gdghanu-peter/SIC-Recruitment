import type { ApplyBttQuestion } from '~/types/apply/question'

export const bttQuestionData: ApplyBttQuestion[] = [
  {
    question: 'Theo em, vai trò của Ban Truyền thông trong CLB là gì?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'communicationRole',
    basis: '1'
  },
  {
    question: 'Em bị thu hút bởi một bài đăng/content như thế nào?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'contentAttraction',
    basis: '1'
  },
  {
    question:
      'Em ấn tượng với chiến dịch truyền thông hay hoạt động truyền thông nào trên nền tảng xã hội? Hãy cho anh/chị biết lí do vì sao em ấn tượng nhé.',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'mediaCampaign',
    basis: '1'
  },
  {
    question:
      'Theo em, bức ảnh dưới đây đang muốn truyền tải thông điệp gì? Hãy diễn tả lại thông điệp đó dưới góc nhìn của mình bằng bất cứ chất liệu nào mà mình muốn nhé (văn xuôi, thơ,...)',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '/btt.png',
    name: 'messageInterpretation',
    basis: '1'
  }
]
