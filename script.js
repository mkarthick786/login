function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Perform further validation or login logic here...
    // For demonstration purposes, we'll simply display an alert
    alert("Login successful!");
  }
  