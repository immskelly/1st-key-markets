// Form Submission (Sends to your email)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We'll contact you soon.");
    this.reset();
});

// Example: Fetch Forex Rates (Static for now)
// Later, you can connect to a real API like Forex API
function updateForexRates() {
    // Simulate live data (replace with real API later)
    document.getElementById("usd-rate").textContent = (18.50 + Math.random() * 0.5).toFixed(2);
    document.getElementById("eur-rate").textContent = (20.10 + Math.random() * 0.5).toFixed(2);
}

// Update rates every 10 seconds
setInterval(updateForexRates, 10000);
updateForexRates(); // Initial load