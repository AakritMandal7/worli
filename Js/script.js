// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Dummy lead form trigger
function openLeadForm() {
  document.getElementById("leadForm").style.display = "flex";
}

// ✅ Hero background image rotation
const images = document.querySelectorAll('.bg-image');
let bgIndex = 0;

setInterval(() => {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === bgIndex);
  });
  bgIndex = (bgIndex + 1) % images.length;
}, 3000);

function openForm() {
  
}

function closeForm() {
  document.getElementById("leadForm").style.display = "none";
}

// Auto popup after 12 seconds
setTimeout(openForm, 12000);

// Optional: open from button
// document.querySelector('.cta-btn').addEventListener('click', openForm);
const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active"); // Close the menu
  });
});