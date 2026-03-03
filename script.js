document.addEventListener("DOMContentLoaded", function () {

  // Subscribe button (ALL pages)
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  }

  // Gallery buttons
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      alert("Item added to the cart.");
    });
  }

  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      alert("Cart cleared.");
    });
  }

  const processOrderBtn = document.getElementById("processOrderBtn");
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      alert("Thank you for your order.");
    });
  }

  // Contact form (About page)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your message.");
      contactForm.reset();
    });
  }

});
