// Khởi tạo Swiper cho phần testimonials
const swiper = new Swiper(".mySwiper", {
    loop: true,           // chạy vòng lặp vô hạn
    spaceBetween: 24,

    // CHẠY LIÊN TỤC
    speed: 4000,          // thời gian trượt hết 1 lần (ms): tăng lên để chạy chậm hơn
    autoplay: {
        delay: 0,           // 0 ms => không dừng giữa các slide
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },

    // TẮT KÉO BẰNG CHUỘT & VUỐT BẰNG TAY
    allowTouchMove: false,
    grabCursor: false,

    // Không dùng pagination, nên không cấu hình pagination

    // Responsive: mobile 1 card, tablet 2, desktop 3 card
    slidesPerView: 1.05,
    breakpoints: {
        576: { slidesPerView: 1.3 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 3, spaceBetween: 28 },
    },
});