document.addEventListener("DOMContentLoaded", function() {
    // Select all necessary elements
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const quantities = document.querySelectorAll('.quantity');
    const prices = document.querySelectorAll('.unit-price');
    const totalPriceElement = document.querySelector('.total');
    const removeButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
  
    // Function to update the total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.card').forEach((card, index) => {
        const quantity = parseInt(quantities[index].textContent);
        const price = parseFloat(prices[index].textContent.replace(' $', ''));
        total += quantity * price;
      });
      totalPriceElement.textContent = `${total} $`;
    }
  
    // Event listener for increasing quantity
    plusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const quantityElement = quantities[index];
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    // Event listener for decreasing quantity
    minusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const quantityElement = quantities[index];
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Event listener for removing items from the cart
    removeButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const card = button.closest('.card');
        card.remove(); // Remove the product card from the DOM
        updateTotalPrice(); // Recalculate the total price
      });
    });
  
    // Event listener for toggling "like" (heart) button color
    heartButtons.forEach((button) => {
      button.addEventListener('click', function() {
        button.classList.toggle('liked');
        if (button.classList.contains('liked')) {
          button.style.color = 'red'; // Change color to red when liked
        } else {
          button.style.color = ''; // Remove color when unliked
        }
      });
    });
  
    // Initial update of the total price when the page loads
    updateTotalPrice();
  });


