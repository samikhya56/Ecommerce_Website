// Initialize cart item count to 0
let cartCount = 0;

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Add event listeners to 'Add to Cart' buttons
const addToCartBtns = [
    document.getElementById('addToCartBtn1'),
    document.getElementById('addToCartBtn2'),
    document.getElementById('addToCartBtn3'),
    document.getElementById('addToCartBtn4'),
    document.getElementById('addToCartBtn5'),
    document.getElementById('addToCartBtn6'),
    document.getElementById('addToCartBtn7'),
    document.getElementById('addToCartBtn8'),
    document.getElementById('addToCartBtn9'),
    document.getElementById('addToCartBtn10')
];

addToCartBtns.forEach((btn, index) => {
    if (btn) {
        btn.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
            alert(`Product ${index + 1} added to cart!`);
        });
    }
});
