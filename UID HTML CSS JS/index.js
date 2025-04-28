document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // prevent default form submission
    
    // Get input values
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    // Get error message elements
    const phoneErr = document.getElementById("phone-error");
    const emailErr = document.getElementById("email-error");
    const passwordErr = document.getElementById("password-error");
    
    // Clear previous error messages
    phoneErr.textContent = "";
    emailErr.textContent = "";
    passwordErr.textContent = "";
    
    let isValid = true;
    
    // Validate phone: exactly 10 digits&#8203;:contentReference[oaicite:8]{index=8}
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneErr.textContent = "Phone number must be 10 digits.";
        isValid = false;
    }
    
    // Validate email: basic format check (contains '@' and '.')&#8203;:contentReference[oaicite:9]{index=9}
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    
    // Validate password: minimum length 6&#8203;:contentReference[oaicite:10]{index=10}
    if (password.length < 6) {
        passwordErr.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    
    // If all fields are valid, show success alert
    if (isValid) {
        alert("Form submitted successfully!");
        // Optionally, reset the form:
        // document.getElementById("myForm").reset();
    }
});
