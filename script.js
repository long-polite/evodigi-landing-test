let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let ticking = false;

window.addEventListener("load", () => {
  AOS.init();
});

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > 50) {
        // Scrolling down and past threshold
        navbar.style.top = "-100px";
      } else if (currentScroll < lastScrollTop) {
        // Scrolling up
        navbar.style.top = "0";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      ticking = false;
    });

    ticking = true;
  }
});

const video = document.getElementById("previewVideo");

const videoWrapper = document.querySelector(".video-wrapper");
const videoIframe = document.querySelector(".video-foreground #previewVideo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoIframe.style.transition = "width 1s ease";
        videoIframe.style.width = "100vw";
      } else {
        videoIframe.style.transition = "width 1s ease";
        videoIframe.style.width = "80vw";
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the video section is in view
  }
);

observer.observe(videoWrapper);
