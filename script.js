// Product data
const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 14.99 },
    { id: 3, name: 'Product 3', price: 19.99 }
];

let shoppingCart = [];

// Load the shopping cart from localStorage
function loadCart() {
    const cart = localStorage.getItem('shoppingCart');
    if(cart) {
        shoppingCart = JSON.parse(cart);
    }
}

// Save the shopping cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Add product to cart
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = shoppingCart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            shoppingCart.push({ ...product, quantity });
        }
        saveCart();
    }
}

// Remove product from cart
function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    saveCart();
}

// Update quantity of product in cart
function updateCartItem(productId, quantity) {
    const cartItem = shoppingCart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
        saveCart();
    }
}

// Calculate total price of items in the cart
function calculateTotal() {
    return shoppingCart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Load the cart on page load
loadCart();

// Example usage:
// addToCart(1, 2);
// removeFromCart(2);
// updateCartItem(1, 5);
// console.log('Total:', calculateTotal());