<template>
  <div class="w-full flex flex-col justify-between min-h-screen">
    <div class="flex flex-col items-center pt-20">
      <Header />
      <div
        class="rounded-2xl bg-white my-2 lg:my-5 w-[380px] text-sm lg:w-[600px] p-4 lg:p-10"
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
      <div class="w-[380px] lg:w-[600px] text-center mb-4">
        <h5 class=" font-montserrat text-[#ce3862] text-base lg:text-2xl font-bold ">Em muốn ứng tuyển vào Ban Chức năng nào khác của CLB Chứng khoán SIC không?</h5>
        <p class="text-[#ce3862]  text-xs lg:text-base">Lưu ý: Tổng số ban em được đăng ký tối đa là <span class="font-bold">02 ban.</span> <br />
Khi điền đơn ban chức năng thứ hai, em hãy chú ý vẫn điền đầy đủ <span class="font-bold">thông tin cá nhân.</span>
Đối với những câu hỏi đã hoàn thành trong phần 01 ở đơn ban thứ nhất, em chỉ cần nhập <span class="font-bold">“Đã trả lời câu hỏi”.</span></p>
      </div>
      <div class="flex gap-4 justify-center mb-4">
        <ULink to="/ttv/choose"><button class="rounded-full text-white bg-[#FF7C9E] text-base py-4 w-[120px] font-semibold">Có</button></ULink>
        <ULink to="/ttv"><button class="rounded-full text-white bg-[#FF7C9E] text-base py-4 w-[120px] font-semibold">Không</button></ULink>
        
      </div>
    </div>
    <Footer />
  </div>
</template>
