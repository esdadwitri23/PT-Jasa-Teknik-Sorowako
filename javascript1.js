document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    sections.forEach((section, index) => {
        // Buat observer untuk memantau tiap section
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Tambahkan delay untuk animasi
                        setTimeout(() => {
                            entry.target.classList.add("visible");
                        }, index * 500); // 500ms per elemen
                        observer.unobserve(entry.target); // Hentikan pengamatan
                    }
                });
            },
            {
                threshold: 0.1, // Mulai animasi ketika 10% elemen terlihat
            }
        );

        observer.observe(section);
    });
});
