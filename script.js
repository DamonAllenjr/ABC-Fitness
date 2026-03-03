document.addEventListener("DOMContentLoaded", () => {
  // Subscribe button (ALL pages)
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing.");
    });
  }

  // Gallery page cart buttons
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Item added to the cart.");
    });
  });

  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      alert("Cart cleared.");
    });
  }

  const processOrderBtn = document.getElementById("processOrderBtn");
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      alert("Thank you for your order.");
    });
  }

  // About page contact form submit
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      if (!contactForm.checkValidity()) return;
      e.preventDefault();
      alert("Thank you for your message.");
      contactForm.reset();
    });
  }
});
