function validatePassword() {
    // Get the password and confirm password values from the form.
    const password = document.getElementById("#password").value;
    const confirmPassword = document.getElementById("#confirmPassword").value;
    // Check if the passwords match.
    if (password !== confirmPassword) {
      // The passwords do not match. Show an error message.
      document.innerHTML= "The password is not match";
      // document.getElementById("error").innerHTML = "The passwords do not match.";
      return false;
    }
    // The passwords match. Hide the error message.
    document.innerHTML = "";
    // document.getElementById("error").innerHTML = "";
    return true;
  }