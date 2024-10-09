<template>
  <UContainer class="w-full">
    <div class="flex flex-col items-center pt-10">
      <Header />
      <div
        class="rounded-2xl bg-white my-10 lg:my-[80px] w-[300px] text-sm lg:w-[600px] p-4 lg:p-10"
      >
          Cảm ơn bạn đã quan tâm và ứng tuyển vào
          <span class="text-primary"> CLB Chứng khoán SIC - FTU</span>. Kết quả
          đăng ký sẽ được gửi tới bạn qua địa chỉ email sau khi kết thúc Vòng
          01. Sau khi hoàn thành điền đơn ban đầu tiên, bạn có thể chọn Menu/
          Tuyển thành viên để điền ban thứ 02 nhé! (Lưu ý: Bạn chỉ được điền
          chọn tối đa 02 ban)
        <br />
          Nếu có thắc mắc, hãy liên hệ với SIC qua Facebook page
          <span class="text-primary">CLB Chứng khoán SIC - FTU</span> hoặc gửi
          mail về địa chỉ
          <nuxt-link
            class="text-primary"
            to="mailto:sicftu.b603@gmail.com"
            target="_blank"
            >sicftu.b603@gmail.com</nuxt-link
          >
      </div>
    </div>
  </UContainer>
  <Footer />
</template>
