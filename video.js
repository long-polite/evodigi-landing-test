// Get elements
const previewVideo = document.getElementById("previewVideo");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

// Open modal on preview video click
previewVideo.addEventListener("click", () => {
  modal.style.display = "flex";

  // Pause background video
  previewVideo.pause();

  // Play modal video with sound
  modalVideo.muted = false;
  modalVideo.volume = 1;
  modalVideo.currentTime = 0;
  modalVideo.play();
});

// Close modal when close button clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause();

  // Resume background video
  previewVideo.play();
});

// Close modal when clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();

    // Resume background video
    previewVideo.play();
  }
});
