import type { ApplyBskQuestion } from '~/types/apply/question'

export const bskQuestionData: ApplyBskQuestion[] = [
  {
    question:
      'Theo em, những yếu tố đóng góp cho sự thành công của một sự kiện là gì? Em nghĩ yếu tố nào là quan trọng nhất?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'eventPlanning',
    basis: '1'
  },
  {
    question: 'Giữa việc phát triển một dự án sáng tạo nhưng rủi ro lớn với một dự án ít đột phá nhưng trong vùng an toàn, em sẽ chọn phương án nào? Giải thích sự lựa chọn của em.',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'riskTaking',
    basis: '1'
  },
  {
    question:
      'Trong bộ phim Inside Out 2, bộ máy cảm xúc của Riley được chi phối bởi 9 cảm xúc chính: Joy, Sadness, Disgust,  Anger, Fear, Anxiety, Envy, Ennui, Embarassment. Trong bộ máy cảm xúc của chính mình, em thấy bản thân được bộc lộ rõ nhất là qua cảm xúc nào? Nếu được chọn 2 cảm xúc để làm việc cùng trong thời gian chạy sự kiện, em sẽ chọn những cảm xúc nào? Vì sao?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'emotionalIntelligence',
    basis: '1'
  },
  {
    question:
      'Nếu em là một nhà hoạ sĩ, em sẽ vẽ bức tranh "Ban Sự Kiện" như thế nào?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'creativeExpression',
    basis: '1'
  },
  {
    question: 'Theo em, con người sống với nhau vì điều gì?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'philosophicalReflection',
    basis: '1'
  }
]
