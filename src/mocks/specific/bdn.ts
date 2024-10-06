import type { ApplyBdnQuestion } from '~/types/apply/question'

export const bdnQuestionData: ApplyBdnQuestion[] = [
  {
    question:
      'Em hãy nêu hiểu biết của em về công việc của Ban Đối ngoại và bản thân em có những yếu tố gì để phù hợp với công việc này?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'understandingExternalRelations',
    basis: '1'
  },
  {
    question:
      'Nếu ví bản thân em là một ca khúc, thì ca khúc ấy có tựa đề là gì? Vì sao?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'selfReflection',
    basis: '1'
  },
  {
    question:
      'Khi được giao một nhiệm vụ mới mà em chưa có kinh nghiệm, em sẽ tiếp cận và giải quyết nó như thế nào?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'problemSolving',
    basis: '1'
  },
  {
    question: '',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '/bdn.png',
    name: 'emailWriting',
    basis: '1'
  }
]
