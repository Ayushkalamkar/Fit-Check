console.log("hello");
// Login page 

  document.getElementById("signupButton").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter full details.");
      return;
    }

    // You can add simple email format validation here if needed:
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all the condtions are true then submitted
    alert("Form submitted successfully!");
  });



// Home page
const poloImage = document.getElementById('poloImage');
const optionsBox = document.getElementById('optionsBox');

// Show options on image click
poloImage.addEventListener('click', () => {
    optionsBox.style.display = 'block';
});

// Functions for buttons
function buyNow() {
    alert("Redirecting to payment page...");
    optionsBox.style.display = 'none';
}

function addToCart() {
    alert("Product added to cart!");
    optionsBox.style.display = 'none';
}






















