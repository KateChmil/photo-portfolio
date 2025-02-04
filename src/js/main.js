document.addEventListener("DOMContentLoaded", function () {
    const animImages = document.querySelectorAll(".anim-img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("anim-show");
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the image is visible

    animImages.forEach((img) => {
        img.classList.add("anim-hidden"); // Start hidden
        observer.observe(img);
    });
});
