import './style.scss';
document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".image-link");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.querySelector(".modal-close");

  // Log anchor clicks and open modal
  imageLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          console.log("Clicked element:", this);
          const imgSrc = this.querySelector("img").src;
          modalImg.src = imgSrc;
          modal.style.display = "flex";
      });
  });

  // Close modal on clicking close button or outside image
  modalClose.addEventListener("click", function () {
      modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  // Add interactivity: Smooth hover effect
  document.querySelectorAll(".container img").forEach(img => {
      img.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.05)";
          this.style.transition = "transform 0.3s ease";
      });
      img.addEventListener("mouseleave", function () {
          this.style.transform = "scale(1)";
      });
  });
});
