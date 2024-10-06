<template>
  <UContainer class="mt-[80px]">
    <h1
      class="uppercase text-xl md:text-3xl text-glow-2 font-bold text-primary text-center"
    >
      Hoạt động nội bộ
    </h1>
    <div class="flex justify-center flex-wrap mt-8">
      <HomeActivitiesItem
        v-for="item in activities"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :image="item.image"
        :subtitle="item.subtitle"
        class="m-6"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const activities = ref([
  {
    name: 'Sonata',
    image: '/activities/sonata.jpg',
    subtitle: 'Chuyến tàu đầu tiên gắn kết SICers',
    description:
      'Với tất cả SICers, SONATA là khởi nguồn của sự gắn kết, mở ra những kỉ niệm đẹp của tuổi thanh xuân. Sau khi trở thành một phần của đại gia đình SICers, SONATA mang đến cơ hội giao lưu giữa các ban, từ đó bước đầu hòa nhập với văn hóa CLB.'
  },
  {
    name: 'Sinh nhật CLB',
    image: '/activities/dulich.jpg',
    subtitle: 'Dạ tiệc “Khoảnh khắc”',
    description:
      'Kỷ niệm sinh nhật thứ 17 của SIC, dạ tiệc "Khoảnh khắc" đã kéo SICers lại gần nhau hơn bao giờ hết. Tạm gác lại những nỗi lo, bộn bề của cuộc sống, các thế hệ SICers quây quần, sum họp trong không khí “gia đình" thân thuộc, ấm cúng để cùng nhau ngắm nhìn những dấu vết mà thời gian đã để lại, cho tâm hôn được thả trôi theo những dòng hoài niệm của quá khứ.'
  },
  {
    name: 'Du lịch CLB',
    image: '/activities/sinhnhat.jpg',
    subtitle: 'Làm hết sức, chơi hết mình',
    description:
      '"Làm hết sức, chơi hết mình", với mục tiêu gắn kết 02 thế hệ SICers, Du lịch Câu lạc bộ trở thành hoạt động thường niên của SIC, là nơi các thành viên quây quần bên nhau, viết nên những kỉ niệm đáng nhớ. Chuyến đi chơi ấy cũng sẽ là dịp để SICers nghỉ ngơi sau một nhiệm kỳ tất bật với các sự kiện.'
  },
  {
    name: 'SIC-STUDIO',
    image: '/activities/sicstu.jpg',
    subtitle: 'Cùng SIC "master" trọn bộ kĩ năng nhiếp ảnh và thiết kế',
    description:
      'Hoạt động training sử dụng bộ công cụ thiết kế: Photoshop, After effect,... và kỹ năng nhiếp ảnh.  Dưới sự hướng dẫn của Ban Truyền thông SIC, các thành viên CLB sẽ bỏ túi thêm kỹ năng chỉnh sửa ảnh, video và chụp ảnh cơ bản. Đây là một trong những hoạt động nội của SIC hướng tới sự phát triển toàn diện của các thành viên với những kỹ năng mang tính ứng dụng cao.'
  },
  {
    name: 'I-Sharing!',
    image: '/activities/isharing.jpg',
    subtitle: 'Đầu tư theo cách của bạn',
    description:
      'Bỏ túi tư duy đầu tư với Khóa học Chứng khoán cơ bản dành riêng cho SICers I-SHARING!. Được thực hiện bởi các giảng viên tâm huyết của Ban Chuyên môn, I-SHARING! mang những giá trị chuyên môn cốt lõi của CLB, giúp các thành viên trang bị nền tảng kiến thức về Tài chính - Chứng khoán.  Ngoài ra đây cũng là cơ hội để các thành viên kết nối và gắn bó với nhau qua các hoạt động trong toàn khóa học.'
  }
])
</script>
