// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});

// Countdown
function startCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const target = new Date("2026-08-20T20:00:00").getTime();
  setInterval(() => {
    const now = Date.now();
    const dist = target - now;
    if (dist < 0) {
      el.innerHTML = `<p class='text-2xl text-amber-400'>Event Live!</p>`;
      return;
    }
    document.getElementById("days").textContent = String(Math.floor(dist / (1000*60*60*24))).padStart(2,'0');
    document.getElementById("hours").textContent = String(Math.floor((dist % (1000*60*60*24)) / (1000*60*60))).padStart(2,'0');
    document.getElementById("minutes").textContent = String(Math.floor((dist % (1000*60*60)) / (1000*60))).padStart(2,'0');
    document.getElementById("seconds").textContent = String(Math.floor((dist % (1000*60)) / 1000)).padStart(2,'0');
  }, 1000);
}

// Payment Functions
function copyBankDetails() {
  navigator.clipboard.writeText("Account Name: Morgan Wallen Fan Club LLC\nAccount: 9876543210\nRouting: 021000021").then(() => alert("✅ Details copied!"));
}

function simulatePayment() {
  alert("✅ Payment successful! (Demo)\nThank you!");
}

function addToCart(item) {
  alert(item + " added to cart (Demo)");
}

window.onload = startCountdown;
