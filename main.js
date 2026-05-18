// Xử lý hiệu ứng card khi load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        const logo = card.querySelector('.logo-center');
        
        // Tắt animation xoay logo khi load
        if (logo) {
            logo.style.animation = 'none';
        }

        // Xử lý hover trên desktop, touch trên mobile
        if (window.matchMedia('(hover: hover)').matches) {
            // Desktop: hover hoạt động bình thường
        } else {
            // Mobile: tắt hover effect, giữ nguyên giao diện
            card.style.transform = 'none';
            card.addEventListener('touchstart', function(e) {
                e.preventDefault();
            });
        }
    });

    // Tối ưu video background cho mobile
    const video = document.querySelector('.background-video');
    if (video) {
        // Tạo poster cho video load nhanh hơn
        video.poster = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"%3E%3Crect fill="%23000" width="1280" height="720"/%3E%3C/svg%3E';
        
        // Stop auto-play trên mobile để tiết kiệm dữ liệu
        if (window.innerWidth < 768) {
            video.autoplay = false;
            video.muted = true;
        }
    }
});
