//taking user back to top
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });




const quantityInputs = document.querySelectorAll('.quantity-input');
quantityInputs.forEach(input => {
  input.addEventListener('input', updateTotal);
});

// Function to update the total and subtotal
function updateTotal() {
  let subtotal = 0;

  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    const price = parseFloat(input.getAttribute('data-price'));
    const itemTotal = quantity * price;

    // Update the total for each item
    const itemTotalElement = input.parentElement.nextElementSibling;
    itemTotalElement.textContent = `€${itemTotal.toFixed(2)}`;

    // Add the item total to the subtotal
    subtotal += itemTotal;
  });

  // Update the subtotal and total in the DOM
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');

  subtotalElement.textContent = `€${subtotal.toFixed(2)}`;
  totalElement.textContent = `€${(subtotal + 15).toFixed(2)}`;
}