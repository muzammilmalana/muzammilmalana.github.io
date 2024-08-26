window.onload = function myalert() {
  alert("Only supported for resolution 1920*1080");
};
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // For "ABOUT ME" text - Move to the right as you scroll down
  const aboutText = document.querySelector(".behindAnimatedText");
  aboutText.style.transform = `translateX(${scrollPosition}px) translateY(-50%)`;

  // For "SKILLS" text - Move to the left as you scroll down (opposite direction)
  const skillsText = document.querySelector(".skillsbehindAnimatedText");
  skillsText.style.transform = `translateX(-${scrollPosition}px) translateY(-50%)`;

  // For "ABOUT ME" text - Move to the right as you scroll down
  const contactText = document.querySelector(".contactbehindAnimatedText");
  contactText.style.transform = `translateX(${scrollPosition}px) translateY(-50%)`;
});
