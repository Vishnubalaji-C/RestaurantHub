// Login Authentication (using simple client-side validation)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple authentication (you can expand it for real-world scenarios)
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to Home Page after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Online Orders Form
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var dish = document.getElementById("dish").value;
    var quantity = document.getElementById("quantity").value;
    var total = quantity * 150; // Assuming each dish costs 150 (can be changed)

    alert("Your order has been placed! Dish: " + dish + ", Quantity: " + quantity + ", Total: ₹" + total);
});

// Lodging Booking Form
document.getElementById("lodgingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var roomType = document.getElementById("roomType").value;
    var checkInDate = document.getElementById("checkIn").value;
    var nights = document.getElementById("nights").value;
    var roomPrice = roomType === "single" ? 2000 : 3500; // Price per night for Single or Double room
    var totalAmount = roomPrice * nights;

    alert("Your booking is confirmed! Room: " + roomType + ", Check-in: " + checkInDate + ", Nights: " + nights + ", Total: ₹" + totalAmount);
});

// Rating Functionality
var rating = 0;
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    star.addEventListener('click', function() {
        rating = index + 1; // Index starts from 0, so we add 1 to get the rating
        updateStars();
    });
});

function updateStars() {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "#ff6347"; // Change color to red for selected stars
        } else {
            star.style.color = "gray"; // Keep other stars gray
        }
    });
}

// Display current date in the form (optional)
window.onload = function() {
    var currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById("checkIn").setAttribute("min", currentDate);
};

// Smooth scroll to sections (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
