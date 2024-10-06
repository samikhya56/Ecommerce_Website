// Initialize the cart count
let cartCount = 0;

// Function to update the cart count in the DOM
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartCount;
}

// Function to handle adding products to the cart
function addToCart() {
    cartCount += 1; // Increment the cart count
    updateCartCount(); // Update the displayed cart count
}

// Attach event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
