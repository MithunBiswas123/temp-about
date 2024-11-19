// Target all images and their respective containers
const images = [
  {
    img: document.getElementById("page3image1"),
    container: document.getElementById("page3right1"),
  },
  {
    img: document.getElementById("page3image2"),
    container: document.getElementById("page3right2"),
  },
  {
    img: document.getElementById("page3image3"),
    container: document.getElementById("page3right3"),
  },
];

// Add scroll event listener
window.addEventListener("scroll", () => {
  images.forEach(({ img, container }) => {
    const containerRect = container.getBoundingClientRect(); // Get container position relative to viewport
    const windowHeight = window.innerHeight; // Height of the viewport

    // Calculate when the container is entering the viewport
    if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
      const visibleRatio = 1 - containerRect.top / windowHeight; // Percentage of container visible
      const movement = Math.max(0, visibleRatio * 100); // Adjust movement sensitivity

      img.style.transform = `translateY(${movement}px)`; // Apply transform
    }
  });
});
