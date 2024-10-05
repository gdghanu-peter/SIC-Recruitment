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
    question: `"CLB Chứng khoán SIC sẽ tổ chức buổi Hội thảo: “Tài chính cá nhân - Từ tự do đến tự lo”, thông tin Hội thảo như sau:

- Thời gian: 17h30, Thứ Năm, ngày 30/11/2024.
- Địa điểm: Hội trường D201, Trường Đại học Ngoại thương.

Giả sử em là thành viên Ban Đối ngoại CLB Chứng khoán SIC, hãy viết một email mời PGS. TS. Phạm Thu Hương - Phó Hiệu trưởng Trường Đại học Ngoại thương tham dự sự kiện này. Trình bày email của em trên nền tảng Google Docs và đính kèm tại đây.

Yêu cầu:
- Viết đầy đủ và đúng format của một email.
- Có tiêu đề email rõ ràng. 
- Không thay đổi những nội dung có sẵn của câu hỏi.
- Hình thức gửi câu trả lời: File Word hoặc Google Docs (ĐÃ MỞ QUYỀN TRUY CẬP)
"`,
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'emailWriting',
    basis: '1'
  }
]
