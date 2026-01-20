var Adventure = 
    {
        UpperTitle: "SUBSCRIPTION",
        Title: "Your Perfect Adventure Experience",
        Description : "Start here",
    }
// Create the button element
var button = document.createElement("button");

// Set button attributes
button.textContent = "Go to Subscription Page"; // Button text
button.style.padding = "10px 20px"; // Padding
button.style.fontSize = "16px"; // Font size
button.style.color = "white"; // Text color
button.style.backgroundColor = "#4CAF50"; // Background color
button.style.border = "none"; // No border
button.style.borderRadius = "5px"; // Rounded corners
button.style.cursor = "pointer"; // Pointer cursor on hover

// Add a click event listener to redirect to another page
button.onclick = function() {
    window.location.href = "Subscribe.html"; // Specify the target HTML file
    // For opening in a new tab, use the line below instead:
    // window.open("subscription.html", "_blank");
};

// Append the button to the body (or any specific element you want)
document.body.appendChild(button);
