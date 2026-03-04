document.addEventListener("DOMContentLoaded", () => {
  const CART_KEY = "cartItems";

  function getCartItems() {
    const raw = sessionStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveCartItems(items) {
    sessionStorage.setItem(CART_KEY, JSON.stringify(items));
  }

  function clearCart() {
    sessionStorage.removeItem(CART_KEY);
  }

  // Subscribe button (ALL pages)
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing.");
    });
  }

  // Gallery: Add-to-cart buttons (multiple)
  const addButtons = document.querySelectorAll(".add-to-cart");
  if (addButtons.length > 0) {
    addButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemName = btn.getAttribute("data-item") || "Item";
        const items = getCartItems();
        items.push(itemName);
        saveCartItems(items);
        alert("Item added to the cart.");
      });
    });
  }

  // Gallery: View Cart modal
  const viewCartBtn = document.getElementById("viewCartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartList = document.getElementById("cartList");

  function renderCart() {
    if (!cartList) return;

    const items = getCartItems();
    cartList.innerHTML = "";

    if (items.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Your cart is empty.";
      cartList.appendChild(li);
      return;
    }

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }

  if (viewCartBtn && cartModal) {
    viewCartBtn.addEventListener("click", () => {
      renderCart();
      cartModal.style.display = "block";
    });
  }

  if (closeCartBtn && cartModal) {
    closeCartBtn.addEventListener("click", () => {
      cartModal.style.display = "none";
    });
  }

  // Gallery: Clear Cart + Process Order
  const clearCartBtn = document.getElementById("clearCartBtn");
  const processOrderBtn = document.getElementById("processOrderBtn");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      clearCart();
      renderCart();
      alert("Cart cleared.");
    });
  }

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      clearCart();
      renderCart();
      alert("Thank you for your order.");
    });
  }

  // About page: save form data to localStorage
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";

      const submission = {
        name,
        email,
        message,
        submittedAt: new Date().toISOString(),
      };

      localStorage.setItem("abcContactForm", JSON.stringify(submission));

      alert("Thank you for your message.");
      contactForm.reset();
    });
  }

  // Close modal if user clicks outside the box
  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
});
