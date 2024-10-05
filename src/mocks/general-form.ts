import type { ApplyQuestion } from '~/types/apply/question'

export const generalQuestionData: ApplyQuestion[] = [
  {
    question: 'Họ và tên',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy nhập đầy đủ họ tên của bạn',
    image: '',
    name: 'name',
    basis: '1/2'
  },
  {
    question: 'Ngày sinh',
    required: true,
    inputType: 'date',
    placeholder: '',
    image: '',
    name: 'dob',
    basis: '1/3'
  },
  {
    question: 'Giới tính',
    required: true,
    inputType: 'checkbox',
    placeholder: '',
    image: '',
    name: 'gender',
    basis: '1/6'
  },
  {
    question: 'Trường THPT bạn đã theo học',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy nhập tên trường THPT của bạn',
    image: '',
    name: 'highSchool',
    basis: '1/2'
  },
  {
    question: 'Chuyên ngành bạn đang theo học',
    required: true,
    inputType: 'text',
    placeholder: 'Ví dụ: Anh 01 - CLC KDQT - K63',
    image: '',
    name: 'major',
    basis: '1/2'
  },
  {
    question: 'Số điện thoại liên hệ',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy nhập số điện thoại của bạn',
    image: '',
    name: 'phoneNumber',
    basis: '1/2'
  },
  {
    question: 'Địa chỉ email',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy nhập địa chỉ email của bạn',
    image: '',
    name: 'email',
    basis: '1/2'
  },
  {
    question: 'Link Facebook',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy đính link Facebook của bạn',
    image: '',
    name: 'facebook',
    basis: '1/2'
  },
  {
    question: 'File ảnh cá nhân (chú ý mở quyền truy cập)',
    required: true,
    inputType: 'text',
    placeholder: 'Hãy upload một bức ảnh cá nhân của bạn',
    image: '',
    name: 'avatar',
    basis: '1/2'
  },
  {
    question:
      'Bạn từng tham gia hoạt động ngoại khóa trước đây chưa? (Nếu có hãy nêu rõ: Tên sự kiện - Vai trò - Thành tích)',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'extracurriculars',
    basis: '1'
  },
  {
    question:
      'Nêu 2 điểm mạnh và 2 điểm yếu của bản thân. Những điểm mạnh này giúp gì cho bạn trong cuộc sống? Bạn dự định sẽ làm gì trong tương lai để khắc phục những điểm yếu đó?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'strengthsWeaknesses',
    basis: '1'
  },
  {
    question:
      'Giữa hàng trăm đơn ứng tuyển vào SIC mỗi năm, em cảm thấy điều gì khiến mình đặc biệt và nổi trội hơn các bạn ứng viên khác?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'uniqueness',
    basis: '1'
  },
  {
    question:
      'Nếu được trở thành thành viên của câu lạc bộ, định hướng phát triển của em trong 2 năm tới là gì? Em mong muốn nhận lại được những gì nếu có cơ hội trở thành thành viên chính thức của CLB Chứng khoán SIC?',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '',
    name: 'futurePlans',
    basis: '1'
  },
  {
    question: 'Nêu suy nghĩ của em về bức ảnh này.',
    required: true,
    inputType: 'textarea',
    placeholder: 'Hãy nhập câu trả lời của bạn',
    image: '/forms/general.png',
    name: 'photoThoughts',
    basis: '1'
  }
]
