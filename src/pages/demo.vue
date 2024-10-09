<template>
    <div>
        <ApplyHeader />
        <div class="h-screen bg-cover items-center bg-center flex mx-auto justify-evenly font-montserrat"
            :style="{ backgroundImage: 'url(/Background.png)' }">
            
            <div class="text-center mt-6">
                <NuxtImg class="w-[500px] mx-auto mb-6" src="/main.png"></NuxtImg>
                <div
                    class="w-[540px] mx-auto h-52 text-justify text-[#c42b2f] text-sm font-semibold leading-relaxed">
                    “Con người sinh ra không phải để tan biến đi như một hạt cát vô danh" – mỗi chúng ta đều mang trong
                    mình khả năng tiềm tàng để kiến tạo dấu ấn riêng biệt trong hành trình của cuộc đời. Đừng để mỗi
                    ngày trôi qua một cách vô định, hãy khám phá, tìm tòi, hãy học hỏi, tích lũy và khi ta dấn thân, mỗi
                    bước đi hôm nay không chỉ là một dấu ấn tạm thời, mà chính là hành trang cho một "Future pocket" –
                    một kho tàng của những thành tựu, kinh nghiệm, và cả những cơ hội mà ta đã gieo mầm – tất cả chính
                    là nền móng cho những giấc mơ lớn lao ta đang dần hiện thực hóa.<br /></div>
                    <div class="h-[29px] text-center text-[#c42b2f] text-[22px] font-bold mb-6 leading-[38.40px]">ĐẾM NGƯỢC THỜI GIAN ĐĂNG KÝ CÒN LẠI</div>
                <div class="flex gap-8 mb-16 justify-center">
                    <div v-for="(item, index) in timeDemo"
                        class="relative text-center  text-[#ab0000] text-2xl font-bold font-montserrat"
                        :key="index">
                        <h1 class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {{ item }}
                        </h1>
                        <NuxtImg class="w-[80px]" src="/Countdown.png" alt=""/>
                        <p class="left-1/2 -translate-x-1/2  mt-2 text-[18px] font-semibold absolute ">
                            {{ timeLabels[index] }}
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="flex flex-col justify-center items-center">
                <NuxtImg class="w-[400px] mb-4" src="/rocket.png" alt="" />
                <ULink to="/ttv">
                    <button
                        class="rounded-full border-2 text-[#BC0303] border-[#FFBCE6] hover:border-[#FF50E5] px-4 py-2 text-2xl font-bold">
                        ĐĂNG KÝ NGAY
                    </button>
                </ULink>
            </div>
        </div>
        <div class="h-screen flex justify-center items-center">
            <div class="w-[800px] p-4 text-justify text-[#c42b2f] text-lg font-semibold font-montserrat leading-9"
                :style="{ backgroundImage: 'url(/bgquote.png)' }">
                Chúng ta không trưởng thành chỉ nhờ những năm tháng đã sống, mà nhờ những trải nghiệm mà ta đã tích lũy.
                Hiểu được ý nghĩa sâu sắc ấy, các SICers luôn khát khao tìm kiếm tri thức, không ngừng học hỏi và trau
                dồi
                kinh nghiệm qua từng bước đi trong cuộc đời – những điều đó chính là bệ phóng vững chắc cho hành trình
                theo đuổi đam mê của bản thân mỗi người.
            </div>
        </div>
        <div class="p-20 mx-auto w-fit mb-16 bg-[#d9d9d9]/10 rounded-[22px] shadow-inner backdrop-blur-[129.40px]">
            <div class="h-auto lg:max-h-full w-full lg:min-w-[400px] lg:w-auto mb-8">
                <iframe class="mx-auto max-h-full max-w-full" width="800" height="500"
                    src="https://www.youtube.com/embed/nTrX8jEARbU" title="VID CLB" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div
                class="w-[759px] mb-8 text-justify text-[#c42b2f] text-sm font-semibold font-montserrat leading-[27px]">
                Trải qua hơn 17 năm không ngừng kiến tạo và phát triển, SIC tự hào mang tới môi trường đào tạo năng
                động,
                chuyên nghiệp, lan tỏa đam mê của hàng nghìn nhà đầu tư trẻ qua các sự kiện chuyên môn thường niên, trở
                thành cầu nối giữa sinh viên và doanh nghiệp trong ngành. SIC mang định hướng hoạt động của một CLB
                chuyên
                môn, với mục tiêu đem lại cơ hội học hỏi và khám phá, đề cao tính chuyên nghiệp và khả năng bứt phá dài
                hạn, chắp cánh cho bao hoài bão đầu tư thành hiện thực.
            </div>
            <ULink to="/">
                <div class="text-[#c42b2f] p-2 text-center text-2xl font-bold font-montserrat">
                    ABOUT US >>
                </div>
            </ULink>
        </div>
        <NuxtImg src="/question-banner.png"></NuxtImg>
        <div class="p-8 mx-auto">
            <NuxtImg src="/cta.png" class="mx-auto w-[800px] mb-10"></NuxtImg>
            <div
                class="p-3 mb-10 rounded-full w-fit mx-auto bg-[#c42b2f] text-white text-[31.42px] font-bold font-montserrat">
                TIMELINE TUYỂN THÀNH VIÊN GEN XVIII
            </div>
            <NuxtImg src="/timeline.png" class="mx-auto w-[1200px] mb-10"></NuxtImg>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
// Target date: 23:59:59, 23/10/2024
const targetDate = new Date('2024-10-23T23:59:59').getTime();
const timeDemo = ref([0, 0, 0, 0]); // Days, Hours, Minutes, Seconds
const timeLabels = ['Ngày', 'Giờ', 'Phút', 'Giây']; // Labels for the countdown

const calculateTime = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timeDemo.value = [days, hours, minutes, seconds];
    } else {
        // Timer has expired, reset values to 0
        timeDemo.value = [0, 0, 0, 0];
    }
};

onMounted(() => {
    // Update every second
    calculateTime(); // Initial calculation
    setInterval(calculateTime, 1000);
});
</script>
