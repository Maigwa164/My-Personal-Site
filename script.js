function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = ["Frontend Developer", "Backend Developer", "UX/UI Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; // Adjust speed for typing and erasing

function typeEffect() {
  const currentText = texts[textIndex];
  const displayedText = document.getElementById("typing");

  if (!isDeleting && charIndex < currentText.length) {
    displayedText.textContent += currentText.charAt(charIndex);
    charIndex++;
    speed = 150; // Speed for typing
  } else if (isDeleting && charIndex > 0) {
    displayedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    speed = 100; // Speed for deleting
  }

  // When the text is completely typed
  if (charIndex === currentText.length) {
    isDeleting = true;
    speed = 1000; // Wait before starting to erase
  }

  // When text is fully erased
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    speed = 500; // Pause before typing new text
  }

  setTimeout(typeEffect, speed);
}

window.onload = typeEffect;
