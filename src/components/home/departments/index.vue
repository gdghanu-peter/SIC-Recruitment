<template>
  <UContainer class="mt-[150px]">
    <h1
      class="uppercase text-center text-glow-2 text-primary font-bold text-3xl"
    >
      Các ban chức năng
    </h1>
    <div class="mt-8 flex flex-col gap-8">
      <HomeDepartmentsItem
        v-for="(item, index) in departments"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :image="item.image"
        :reverse="index % 2 !== 0"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const departments = ref([
  {
    name: 'Ban Truyền thông',
    description:
      'Với sứ mệnh lan tỏa và nâng tầm thương hiệu CLB Chứng khoán SIC, Ban Truyền thông là nơi hội tụ những cá thể năng động và sáng tạo nhất - chủ nhân của những content thú vị, những ấn phẩm bắt mắt. Đóng vai trò cơ quan ngôn luận của SIC, các thành viên Ban Truyền thông chịu trách nhiệm chính trong việc vận hành các phương tiện truyền thông, xây dựng ý tưởng và chiến lược truyền thông hiệu quả cho từng sự kiện, mang giá trị và hình ảnh CLB đến gần hơn với sinh viên và doanh nghiệp trên khắp cả nước.',
    image: '/departments/btt.png'
  },
  {
    name: 'Ban Đối ngoại',
    description:
      'Nhắc đến Ban Đối ngoại là nhắc đến những "SICnature" rất riêng: Chỉn chu, chuyên nghiệp, thu hút và tự tin,. Đóng vai trò kết nối và duy trì mối quan hệ với các đối tác, những "nhà đàm phán" tài năng từ Ban Đối ngoại chính là đại sứ thương hiệu giúp CLB mở rộng mạng lưới hợp tác với giới tài chính - doanh nghiệp, góp phần nâng tầm quy mô tổ chức của các sự kiện ngoại tầm cỡ.',
    image: '/departments/bdn.png'
  },
  {
    name: 'Ban Chuyên môn',
    description:
      'Gắn liền với những dấu ấn học thuật ấn tượng, Ban Chuyên môn là nơi khơi nguồn những ý tưởng, những nội dung chuyên môn cốt lõi - tiền đề cho sự thành công trong các sự kiện của SIC. Để có thể thực hiện sứ mệnh ấy, ngay từ khi còn là những cộng tác viên, các thành viên của Ban Chuyên môn đã được đào tạo chuyên sâu về kiến thức, tập trung trau dồi những kỹ năng cần thiết, tôi luyện bản lĩnh của những chú “cá mập” vững vàng trước làn sóng khắc nghiệt của thị trường.',
    image: '/departments/bcm.png'
  },
  {
    name: 'Ban Nhân sự',
    description:
      'Với phương châm “More than a club”, Ban Nhân sự là chất keo gắn kết các thế hệ thành viên trong CLB Chứng khoán SIC. Đảm nhận vai trò quản lý và phân phối nhân sự, xây dựng nội quy, lên kế hoạch training dài hạn và chăm sóc đời sống tinh thần cho SICers, Ban Nhân sự chính là nơi kết nối và đào tạo nguồn nhân lực chất lượng trong tổ chức; giúp SIC không chỉ dừng ở một CLB chuyên môn cho sinh viên, mà còn là mái ấm nơi chứa đựng tuổi thanh xuân của tất cả thành viên.',
    image: '/departments/bns.png'
  },
  {
    name: 'Ban Sự kiện',
    description:
      'Đằng sau thành công của mỗi sự kiện tầm cỡ gắn mác SIC là kế hoạch tổ chức chỉn chu, chuyên nghiệp tới từ đội ngũ Ban Sự kiện. Hội tụ những cá nhân nhiệt huyết và trách nhiệm, sở hữu đầu óc nhạy bén cùng tư duy logic Ban sự kiện có nhiệm vụ lên kế hoạch tổ chức, quản lý tài chính, dự trù rủi ro và chỉ đạo xử lý các tình huống phát sinh. Họ là những nhân vật điều phối xuất sắc “phía sau cánh gà” - chìa khóa cho sự thành công trong tất cả hoạt động của SIC.',
    image: '/departments/bsk.png'
  }
])
</script>
