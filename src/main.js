document.addEventListener("DOMContentLoaded", function () {
    const animImages = document.querySelectorAll(".anim-img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("anim-show"); // Add animation when visible
            } else {
                entry.target.classList.remove("anim-show"); // Remove animation when out of view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 30% of the image is visible

    animImages.forEach((img) => {
        img.classList.add("anim-hidden"); // Start hidden
        observer.observe(img);
    });
});
console.log("JavaScript is working!");