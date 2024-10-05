import type { ApplyBcmQuestion } from '~/types/apply/question'

export const bcmQuestionData: ApplyBcmQuestion[] = [
  {
    question: 'Em hãy điền đáp án ô (?) và giải thích quy luật dưới 100 chữ:',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '/forms/bcm.png',
    name: 'logicalThinking',
    basis: '1'
  },
  {
    question:
      'Em sẽ lựa chọn trở thành cổ đông sở hữu 10% cổ phần công ty có giá trị 100 triệu USD hay là sở hữu 50% cổ phần công ty có giá trị 20 triệu USD? Tại sao?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'decisionMaking',
    basis: '1'
  },
  {
    question:
      'Nếu trúng xổ số với tổng giá trị 3 tỷ VNĐ, em sẽ sử dụng số tiền đó như thế nào?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'financialPlanning',
    basis: '1'
  }
]
