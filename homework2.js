//////Name: Lauren Morales, File name: homework1.js/////

function removedata1() {
    document.getElementById("outputformdata").innerHTML = "(you started over)";
  }
    
function validateForm(event) {
    const errors = validateInputs();
    if (errors.length > 0) {
        event.preventDefault();
        displayErrors(errors);
        return false;
    }
    return true;
}

function validateInputs() {
    let error = [];

    const namePattern = /^[A-Za-z'-]{1,30}$/;
    if (!namePattern.test(document.getElementById("fname").value)) {
        error.push("First name must be 1 to 30 characters; Letters, apostrophes, and hyphens only");
    }
    if (!namePattern.test(document.getElementById("lName").value)) {
        error.push("Last name must be 1 to 30 characters; Letters, apostrophes, hyphens, and numbers 2 to 5")
    }

    const middleInitialPattern = /^[A-Za-z]?$/;
    if (!middleInitialPattern.test(document.getElementById("minitial").value)) {
        error.push("Middle inital can only be 1 letter")
    }

    const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)|d{2}$/;
    const dobValue = document.getElementById("dob").value;
    if (dobPattern.test(dobValue)) {
        const dobParts = dobValue.split("/");
        const dobDate = new Date(dobParts[2], dobParts[0] - 1, dobParts[1]);
        const currentDate = new Date();
        const minDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate());
        if (dobDate > currentDate || dobDate < minDate) {
            error.push("Date of birth is out of range.");
        }
    } else {
        error.push("Date of birth must follow MM/DD/YYYY format.");
    }

    const ssnPattern = /^\d{9}$/;
    if (!ssnPattern.test(document.getElementById("ssn").value)) {
        error.push("Social Secturity Number must follow XXXXXXXXX format (No Hyphens).");
    }

    const address1Pattern = /^.{2,30}$/;
    if (!address1Pattern.test(document.getElementById("address1").value)) {
        error.push("Address Line 1 must be 2 to 30 characters.");
    }

    const address2Value = document.getElementById("address2").value;
    if (address2Value && !adress1Patern.test(address2Value)) {
        error.push("Address Line 2 must be 2 to 30 characters if provided");
    }

    const cityPattern = /^[A-Za-z\s]{2,30}$/;
    if (!cityPattern.test(document.getElementById("city").value)) {
        error.push("City must be 2 to 30 characters; Only letters.");
    }

    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(document.getElementById("zip").value)) {
        error.push("Zip Code must follow XXXXX format");
    }

    const phonePattern = /^(\d{3}-\d{3}-\d{4})$/;
    const phoneValue = document.getElementById("phone").value;
    if (!phonePattern.test(phoneValue)); {
        error.push("Phone number must be in XXX-XXX-XXXX format")
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[A-Za-z]{2,4}%/;
    if (!emailPattern.test(document.getElementById("email").value)) {
        error.push("Email address mush follow name@domain.tld format")
    }

    const Yes = document.getElementById("radio1").checked;
    const No = document.getElementById("radio1").checked;
    const Unsure = document.getElementById("radio1").checked;
    if (!Yes && !No && !Unsure) {
        error.push("Please select one.")
    }

    const userIdPattern = /^(?!.*\s)[A-Za-z_-][A-Za-z0-9_-]{4,29}$/;
    const userIdValue = document.getElementById("usr").value.toLowerCase();
    if (!userIdPattern.test(userIdValue)) {
        error.push("Username must be 5 to 30 characters; No spaces or special characters.");
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    const passwordInput = document.getElementById("pwd").value;
    const userIdInput = document.getElementById("usr").value;

    if (!passwordPattern.test(passwordInput)) {
        error.push("Password must be 8 to 30 characters and contain 1 upper case letter, 1 lower case letter, 1 number, and 1 special character.");
    } else if (passwordInput.includes(userIdInput) || passwordInput === userIdInput) {
        error.push("Password cannot include or equal Username.")
    }

    if (document.getElementById("pwd").value !==
        document.getElementById("pwd2").value) {
        error.push("Passwords must match.");
    }
        return error;
    }
    function displayErrors(errors) {
        const errorContainer = document.getElementById("errorMessages");
        errorContainer.innerHTML = "";
        errors.forEach(error => {
            const errorElement = document.createElement("p");
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
    }