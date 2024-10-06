document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Logic to add the product (to be implemented)
    alert(`Product ${productName} added with price $${productPrice} and image URL ${productImage}`);
    // Redirect to the dashboard or clear the form
});
