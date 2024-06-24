/*
Name: Lauren Morales, File name: homework1.js
File: homework2.js
Date created: 06/16/2024
Date Updated: 06/23/2024
version: 0.1
Purpose: Redisplay/validate data from a form
Notes: there are like two or three versions of the js code that are notes now. it doesnt all go together.
*/


/*document.addEventListener('DOMContentLoaded', () => {
    const today = new Date ();
    let text = today.toLocaleDateString();
    document.getElementById("today").innerHTML = text;

    document.getElementById("fname").addEventListener("input", validateName);

    document.getElementById("signup").addEventListener("submit", function(event) {
        if (!validateName()) {
            event.preventDefault();
        }
    });
}); */

function updateDateTime () {
    const today = new Date ();
    const month = months[today.getMonth()];
    const day = days[today.getDay()];
    const year = today.getFullYear();

    const formmattedDate = `${month} ${day}, ${year}`;
    document.getElementById("today").innerHTML = formmattedDate;
}

updateDateTime();

/*function removedata1() {
    document.getElementById("outputformdata").innerHTML = "You started over.";
}*/

function displayError(inputId, message) {
    const errorDiv = document.getElementById(inputId + "Error");
    error.Div.textContent = message;
    errorDiv.classList.remove("active");
}

function clearError(inputId) {
    const errorDiv = document.getElementById(inputId + "Error");
    errorDiv.textContent = "";
    errorDiv.classList.remove("active");
}

/*function getdata1() {
    var formcontents = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
        formoutput = "<table class='output'><th>Question</th><th>Type</th<th>Answer</th>";
        for (i = 0; i < formcontents.length; i++) {
            console.log("item: " + i + " " + formcontents.elements[i].name +" = "+ formcontents.elements[i].value);
            if (formcontents.elements[i].value !="") {
                datatype = formcontents.elements[i].type;
                switch (datatype) {
                    case "checkbox":
                        if (formcontents.elements[i].checked) {
                            formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                            formoutput = formoutput + "<td align='right'>"+ datatype + "</td>";
                            formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
                        }
                        break;
                    case "radio":
                        if (formcontents.elements[i].checked) {
                            formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                            formoutput = formoutput + "<td align='right'>"+datatype + "</td>";
                            formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value+"</td></tr>";
                        }
                        break;
                    case "button": 
                    case "submit": 
                    case "reset":
                        formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>"+ formcontents.elements[i].name + "</td></tr>";
                        break;
                    default:
                        formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].name + "</td></tr>";
                }
            }
        }

    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("outputformdata").innerHTML = formoutput;
    }
}

var check = function() {
    if (document.getElementById("pwd").value ==
document.getElementById("confirmpwd").value) {
    document.getElementById(pwd_message).style
} */

function validatefName() {
    const firstNameInput = document.getElementById("fname");
    const firstNamePattern = /^[A-Za-z-'\s]{2,30}$/;
    if (!firstNamePattern.test(firstNameInput.value)) {
        displayError('fname',"Invalid: Letters, hyphens, apostrophes, and spaces only.");
    } else {
        clearError('fname');
    }
}

document.getElementById("fname").addEventListener("blur", validatefName);

function validateminitial() {
    const minitialInput = document.getElementById("minitial");
    const minitialPattern = /^[A-Za-z]?$/;
    if (!minitialPattern.test(minitialInput.value)) {
        displayError("minital","Middle Initial can only be one letter");
    } else {
        clearError("minital");
    }
}

document.getElementById("minital").addEventListener("blur,validateminital");

function validatelname () {
    const lnameInput = document.getElementById("lname");
    const lnamePattern = /^[A-Za-z2-5-'\s]{2,30}$/;
    if (!lnamePattern.test(lnameInput.value)) {
        displayError("lname", "Invalid: Letters, hyphens, apostrophes only.");
    } else {
        clearError("lname");
    }
}

document.getElementById("lname").addEventListener("blur", validatelname);

function validatedob() {
    const dobInput = document.getElementById("dob");
    const dobErrorDiv = document.getElementById("dobError");
    const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}%$/;
    const dobValue = dobInput.value.trim();
    let errorMessage = "";

    if (dobPattern.test(dobValue)) {
        const dobParts = dobValue.split("/");
        const year = parseInt(dobParts[2], 10);
        const month = parseInt(dobParts[0], 10) - 1;
        const day = parseInt(dobParts[1], 10);
        const dobDate = new Date(year, month, day);

        const currentDate = new Date();
        currentDate.setHours(0,0,0,0);

        const minDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate());
        if (dobDate > currentDate) {
            errorMessage = "Invalid: Out of range.";
        } else if (dobDate < minDate) {
            errorMessage = "Invalid: Out of range.";
        }
    } else {
        errorMessage = "Invalid: Must use MM/DD/YYYY format.";
    }

    if(errorMessage) {
        dobErrorDive.textcontent = errorMessage;
        dobErrorDiv.classList.add("active");
    } else {
        dobErrorDiv.textContent = "";
        dobtErrorDiv.classList.remove("active");
    }
}

document.getElementById("dob").addEventListener("blur",validatedob);

function validatessn() {
    const ssnInput = document.getElementById("ssn");
    const ssnPattern = /\d{9}/;
    if (!ssnPattern.test(ssnInput.value)) {
        displayError("ssn","Invalid: Use XXXXXXXXX format (No hyphens).");
    } else {
        clearError("ssn");
    }
}

document.getElementById("ssn").addEventListener("blur",validatessn);

function validateaddress1() {
    const address1Input = document.getElementById("address1");
    const address1Pattern = /^.{2,30}$/;
    if (!address1Pattern.test(address1Input.value)) {
        displayError("address1","Invalid: Please enter address");
    } else {
        clearError("address1");
    }
}

document.getElementById("address1").addEventListener("blur",validateaddress1);

function validateaddress2(){
    const address2Input = document.getElementById("address2");
    const address2Pattern = /^.{2,30}$/;
    const address2Value =address2Input.value;

    if (address2Value && !address2Pattern.test(address2Value)) {
        displayError("address2","Invalid: Letters, numbers, hyphens, apostrophes only.");
    } else {
        clearError("address2");
    }
}

document.getElementById("address2").addEventListener("blur", validateaddress2);

function validatecity() {
    const cityInput = document.getElementById("city");
    const cityPattern = /^[A-Za-z\s]{2,30}$/;
    if (!cityPattern.test(cityInput.value)) {
        displayError("city","Invalid: Letters only.");
    } else {
        clearError("city");
    }
}

document.getElementById("city").addEventListener("blur", validatecity);

function validatezip() {
    const zipInput = document.getElementById("zip")
    const zipPattern = /\d{5}/;
    if (!zipPattern.test(zipInput.value)) {
        displayError("zip", "Invalid: 5 digit zipcode only.");
    } else {
        clearError("zip");
    }
}

document.getElementById("zip").addEventListener("blur, validatezip");

function validatephone() {
    const phoneInput = document.getElementById("phone");
    const phonePattern = /(\d{3}-\d{3}-\d{4})/;
    if (!phonePattern.test(phoneInput.value)) {
        displayError("phone", "Invalid: Phone must use XXX-XXX-XXXX format");
    } else {
        clearError("phone");
    }
}

document.getElementById("phone").addEventListener("blur", validatephone);

function validateemail() {
    const emailInput = document.getElementById("email");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[A-Za-z]{2,4}%/;
    if (!emailPattern.test(emailInput.value)) {
        displayError("email", "Invalid: Use email@domain.dlt format only.");
    } else {
        clearError("email");
    }
}

document.getElementById("email").addEventListener("blur", validateemail);

function validateusr() {
    const usrInput =  document.getElementById("usr");
    const usrPattern = /(?!.*\s)[A-Za-z_-][A-Za-z0-9_-]{4,29}/;
    if (!usrPattern.test(usrInput.value)) {
        displayError("usr", "Invalid: 5 to 30 characters, cannot start with number, no special characters, or spaces.");
    } else {
        clearError("usr");
    }
}

document.getElementById("usr").addEventListener("blur", validateusr);

function validatepwd() {
    const pwdInput = document.getElementById("pwd");
    const pwdPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}/;
    if (!pwdPattern.test(pwdInput.value)) {
        displayError("pwd", "Invalid: Must be 8 to 30 characters; must contain 1 upper case, 1 number, and 1 special character.");
    } else {
        clearError("pwd");
    }
}

document.getElementById("pwd").addEventListener("blur", validatepwd);

function validatepwd2() {
    const pwdInput = document.getElementById("pwd");
    const pwd2Input = document.getElementById("pwd2");
    if (pwdInput.value !== pwd2Input.value) {
        displayError("pwd2", "Invalid: Passwords must match.");
    } else {
        clearError("pwd2");
    }
}

document.getElementById("pwd2").addEventListener("blur", validatepwd2);

/* Note: i tried so many ways to validate, but i couldnt get any of them to work*/

function validateInputs() {
    let error = [];

    const namePattern = /^[A-Za-z-'\s]{2,30}$/;
    if (!namePattern.test(document.getElementById("fname").value)) {
        error.push("Invalid: Must be 2 to 30 characters; Letters, hyphens, apostrophes only.");
    }

    const lnamePattern = /^[A-Za-z2-5-'\s]{2,30}$/;
    if (!lnamePattern.test(document.getElementById("lname").value)) {
        error.push("Invalid:Must be 2 to 30 characters; Letters, 2-5, hyphens, apostrophes only.");
    }

    const minitalPattern = /[A-Z]?/;
    if (!minitalPattern.test(document.getElementById("minitial").value)) {
        error.push("Invalid: 1 Capital Letter only.");
    }

    const dobPattern = /(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}%/;
    if (!dobPattern.test(document.getElementById("dob").value)) {
        error.push("Invalid: 4 digits, 2 digits, 2 digits.");
    }

    const ssnPattern = /\d{9}/;
    if (!ssnPattern.test(document.getElementById("ssn").value)) {
        error.push("Invalid: XXXXXXXXX format only; No hyphens.");
    }

    const address1Pattern = /.{2,30}/;
    if (!address1Pattern.test(document.getElementById("address1").value)) {
        error.push("Invalid: 2 to 30 characters; Letters, numbers, hyphens, apostrophes only.");
    }

    const address2Pattern = /pattern/;
    if (!address2Pattern.test(document.getElementById("address2").value)) {
        error.push("Invalid: 2 to 30 characters; Letters, numbers, hyphens, apostrophes only.");
    }

    const cityPattern = /[A-Za-z\s]{2,30}/;
    if (!cityPattern.test(document.getElementById("city").value)) {
        error.push("Invalid: 2 to 30 characters; Letters, numbers, hyphens, apostrophes only.");
    }

    const zipPattern = /\d{5}/;
    if (!zipPattern.test(document.getElementById("zip").value)) {
        error.push("Invalid: 5 digits.");
    }

    const phonePattern = /(\d{3}-\d{3}-\d{4})/;
    if (!phonePattern.test(document.getElementById("phone").value)) {
        error.push("Invalid: 10 digits.");
    }
    
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[A-Za-z]{2,4}%/;
    if (!emailPattern.test(document.getElementById("email").value)) {
        error.push("Invalid: 2 to 30 characters; Letters, numbers, hyphens, apostrophes only.");
    }

    const usrPattern = /(?!.*\s)[A-Za-z_-][A-Za-z0-9_-]{4,29}/;
    if (!usrPattern.test(document.getElementById("usr").value.toLowerCase())) {
        error.push("Invalid: 5 to 30 characters; No spaces; No special characters.");
    }

    const pwdPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}/;
    if (!pwdPattern.test(document.getElementById("pwd").value)) {
        error.push("Invalid: 8 to 30 characters, 1 upper case, 1 number, and 1 special character");
    }

    if (document.getElementById("pwd").value !== document.getElementById("pwd2").value) {
        error.push("Invalid: Passwords must match");
    }

    return error;
}

    /*if (!namePattern.test(fName)) {
        error.push("Letters, hyphens, apostrophes only.");
        document.getElementById("fname_message").innerHTML = "Invalid: Letters, hyphens, apostrophes, and spaces only.";
    } else if(fName.length < 2) { 
        error.push("First name too short.");
        }
    
    if (!namePattern.test(lName)) {
        error.push("Letters, hyphens, apostrophes only.");
        document.getElementById("lname_message").innerHTML = "Invalid last name.";
    } else if (lName.length < 2) {
            error.push("Last name too short.");
        }
    
    const mInitial = document.getElementById("minitial").value;

    if (!mInitial.match(/^[A-Z]$/)) {
        error.push("1 Capital Letter only.");
    }

    function getMinDate() {
        const today = new Date();
        const minDate = new Date(today.setFullYear(today.getFullYear() - 120));
        const year = minDate.getFullYear();
        const month = ("0" + (minDate.getMonth() + 1)).slice(-2);
        const day = ("0" + minDate.getDate()).slice(-2);
        return `${month}-${day}-${year}`;
    }

    document.getElementById("dob").min = getMinDate();

    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    const dob = document.getElementById("dob").value;

    if (!dobPattern.test(dob)) {
        error.push("MM/DD/YYYY format only.");
    }
    
    const ssnPattern = /^\d{9}$/;
    const ssn = document.getElementById("ssn").value;

    if(!ssnPattern.test(ssn)) {
        error.push("Must follow XXXXXXXXX format (No hyphens).");
    } else if (ssn.length !== 9) {
        error.push("Only enter 9 digits");
    }

    const addressPattern = /^.{2,30}$/;
    const address1 = document.getElementById("address").value;
    const address2 = document.getElementById("address2").value;

    if (!addressPattern.test(address1)) {
        error.push ("2 to 30 characters only.");
    } else if (address1.length < 2) {
        error.push ("Please enter address");
    }
    if (!addressPattern.test(address2)) {
        error.push ("2 to 30 characters only.");
    }

    const cityPattern = /^[A-Za-z\s]{2,30}$/;
    const city = document.getElementById("city");

    if (!cityPattern.test(city)) {
        error.push ("2 to 30 characters only.");
    } else if (city.length < 2) {
        error.push ("Please enter City.");
    }

    const zipPattern = /^\d{5}$/;
    const zip = document.getElementById("zip");

    if (!zipPattern.test(zip)) {
        error.push("Digits only.");
    } else if (zip.length !== 5) {
        error.push ("Please enter 5 digit Zip Code.");
    }

    const phonePattern = /^(\d{3}-\d{3}-\d{4})$/;
    const phone = document.getElementById("phone").value;

    if (!phonePattern.test(phone)) {
        error.push ("Use XXX-XXX-XXXX format only.");
    } else if (phone.length !== 12) {
        error.push ("Enter phone number with dashes.");
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[A-Za-z]{2,4}%/;
    const email = document.getElementById("email").value;

    if (!emailPattern.test(email)) {
        error.push ("Use email@domain.dlt format only.");
    } else if (email.length < 2) {
        error.push ("Enter email address.");
    }

    const usrPattern = /^(?!.*\s)[A-Za-z_-][A-Za-z0-9_-]{4,29}$/;
    const usr = document.getElementById("usr").value.toLowerCase();

    if (!usrPattern.test(usr)) {
        error.push ("5 to 30 characters; No spaces; No special characters.");
    } else if (usr.length < 5) {
        error.push ("Please enter username.");
    }

    const pwdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    const pwd = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("pwd2").value;

    if (!pwdPattern.test(pwd)) {
        error.push ("8 to 30 characters, 1 upper case, 1 number, and 1 special character");
    } else if (pwd.length < 8) {
        error.push ("Please enter password");
    }
    if (pwd !== pwd2) {
        error.push ("Passwords must match");
    }

    if (error.length > 0) {
        document.getElementById("error_message").innerHTML = error.join("<br>");
    }
}

function validateName() {
    let x = document.getElementById("fname").value;
    let errorMessage = "";

    if (x.length < 2) {
        errorMessage= "Invalid: Enter First Name.";
    } else if (!x.match(/^[A-Za-z-'\s]{2,30}$/)) {
            errorMessage = "Invalid: Letters, hyphens, apostrophes, and spaces only.";
        }
    document.getElementById("fname_message").innerHTML = errorMessage;

    document.getElementById("fname").setCustomValidity(errorMessage);

    return errorMessage === "";
}

function checkfirstname() {
    x = document.getElementById("fname").value;
    if (x.length < 2) {
        document.getElementById("fname_message").innerHTML = "Invalid: Name too short.";
        error_flag = 1;
    } else {
        if (x.match(/[A-Za-z2-5-'\s]{2,30}/)) {
            document.getElementById("fname_message").innerHTML = "";
        } else {
            document.getElementById("fname_message").innerHTML = "Invalid: Letters, hyphens, apostrophes, and spaces only.";
            error_flag = 1;
        }
    }
}

function checkmiddle() {
    x = document.getElementById("minitial").value;
    if (x.length > 0) {
        if (x.match(/[A-Z]/)) {
            document.getElementById("minitial_message").innerHTML = "";
        } else {
            document.getElementById("minitial_message").innerHTML = "Invalid: 1 Capital Letter only.";
            error_flag = 1;
        }
    }
}

function checklastname() {
    x = document.getElementById("lname").value;
    if (x.length < 2) {
        document.getElementById("lname_message").innerHTML = "Invalid: Name too short.";
        error_flag = 1;
    } else {
        if (x.match(/[A-Za-z2-5-'\s]{2,30}/)) {
            document.getElementById("lname_message").innerHTML = "";
        } else {
            document.getElementById("lname_message").innerHTML = "Invalid: Letters, hyphens, apostrophes, and spaces only.";
            error_flag = 1;
        }
    }
}

function checkdob() {
    x = document.getElementById("dob").value;
    if (x == "") {
        document.getElementById("dob_message").innerHTML = "Invalid: Enter Date of Birth.";
        error_flag = 1;
    } else {
        document.getElementById("dob_message").innerHTML = "";
    }
}

function checkssn() {
    x = document.getElementById("ssn").value;
    if (x.length < 9) {
        document.getElementById("ssn_message").innerHTML = "Invalid: Enter Social Security Number.";
        error_flag = 1;
    } else {
        if (x.match(/\d{3}-\d{2}-\d{4}/)) {
            document.getElementById("ssn_message").innerHTML = "";
        } else {
        document.getElementById("ssn_message").innerHTML = "Invalid: Use xxx-xx-xxxx format.";
        error_flag = 1;
        }
    }
}

function checkaddress1() {
    x = document.getElementById("address1").value;
    if (x.length < 2) {
        document.getElementById("address1_message").innerHTML = "Invalid: Address too short.";
        error_flag = 1;
    } else {
        if (x.match(/[A-Za-z0-9\s]{2,30}/)) {
            document.getElementById("address1_message").innerHTML = "";
        } else {
        document.getElementById("address1_message").innerHTML = "Invalid: Letters, numbers,hyphens, apostrophes, and spaces only.";
        error_flag = 1;
        }
    }
}

function checkaddress2() {
    x = document.getElementById("address2").value;
    if (x.match(/[A-Za-z0-9\s]{0,30}/)) {
            document.getElementById("address2_message").innerHTML = "";
        } else {
        error_flag = 1;
    }
}

function checkcity() {
    x = document.getElementById("city").value;
    if (x.length < 2) {
        document.getElementById("city_message").innerHTML = "Invalid: City too short.";
        error_flag = 1;
    } else {
        if (x.match(/[A-Za-z\s]{2,30}/)) {
            document.getElementById("city_message").innerHTML = "";
        } else {
        document.getElementById("city_message").innerHTML = "Invalid: Letters, numbers,hyphens, apostrophes, and spaces only.";
        error_flag = 1;
        }
    }
}

function checkstate() {
    x = document.getElementById("state").value;
    if (x == "") {
        document.getElementById("state_message").innerHTML = "Invalid: Select a state.";
        error_flag = 1;
    } else {
        document.getElementById("state_message").innerHTML = "";
    }
}

function checkzip() {
    x = document.getElementById("zip").value;
    if (x.length < 5) {
        document.getElementById("zip_message").innerHTML = "Invalid: Zip code too short.";
        error_flag = 1;
    } else {
        if (x.match(/\d{5}/)) {
            document.getElementById("zip_message").innerHTML = "";
        } else {
        document.getElementById("zip_message").innerHTML = "Invalid: Zip code must be 5 digits.";
        error_flag = 1;
        }
    }
}

function checkphone() {
    x = document.getElementById("phone").value;
    if (x.length < 10) {
        document.getElementById("phone_message").innerHTML = "Invalid: Phone number too short.";
        error_flag = 1;
    } else {
        if (x.match(/\d{10}/)) {
            document.getElementById("phone_message").innerHTML = "";
        } else {
        document.getElementById("phone_message").innerHTML = "Invalid: Use XXXXXXXXXX format; Digits only.";
        error_flag = 1;
        }
    }
}

function checkemail() {
    x = document.getElementById("email").value;
    if (x.length < 5) {
        document.getElementById("email_message").innerHTML = "Invalid: Enter email address.";
        error_flag = 1;
    }
    else {
        if (x.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+/)) {
            document.getElementById("email_message").innerHTML = "";
        } else {
            document.getElementById("email_message").innerHTML = "Invalid: Use e-mail format email@domain.dlt";
            error_flag = 1;
        }
    }
}

function checkusr() {
    let error_flag = 0;
    let x = document.getElementById("usr").value;
    if (x.length < 5) {
        document.getElementById("usr_message").innerHTML = "Invalid: Username too short.";
        error_flag = 1;
    } else {
        if (x.match(/[a-zA-Z][A-Za-z0-9-_]{4,30}/)) {
            document.getElementById("usr_message").innerHTML = "";
        } else {
            document.getElementById("usr_message").innerHTML = "Invalid: Letters, numbers, underscores, and hyphens only.";
            error_flag = 1;
        }
    }
    return error_flag === 0;
}*/

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("dob").addEventListener("input", function (e) {
        var value = e.target.value;
        value = value.replace(/\D/g,"");

        if (value.length > 4) {
            value = value.slice(0,2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
        } else if (value.length > 2) {
            value = value.slice(0,2) + "/" + value.slice(2);
        }
        e.target.value = value;
    });

    document.getElementById("phone").addEventListener("input", function (e) {
        var value = e.target.value;
        value = value.replace(/\D/g,"");

        if (value.length > 6) {
            value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
        } else if (value.length > 3) {
            value = value.slice(0,3) + "-" + value.slice(3);
        }
        e.target.value = value;
    });

    function closeReviewModal() {
        document.getElementById("reviewModal").style.display = "none";
    }

    function closeErrorModal() {
        document.getElementById("errorModal").style.display = "none";
    }

    function obscuressn(ssn) {
        return "XXX-XX-" + ssn.slice(-4);
    }

    function obscurepwd(pwd) {
        return "x".repeat(pwd.length);
    }

    const labels = document.querySelectorAll("label");

    labels.forEach(label => {
        const inputId = lavel.getAttribute("for");
        const inputElement = document.getElementById(inputId);

        if (inputElement) {
            inputElement.setAttribute("placeholder", label.innerText.replace(":","").trim());
        }
    });
    function getLabelForInput(inputId) {
        const labelElement = document.querySelector('label[for="${inputId}"]');
        if (labelElement) {
            return labelElement.innerText.replace(":","").trim();
        }
        return inputId;
    }

    const submitButton = document.querySelector(".button-container input[type = 'submit']")
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

        const error = validateInputs();

        if (error.length > 0) {
            showError(error);
            return;
        }

        showReviewModal();
    });

    function showError(error) {
        const errorList = document.getElementById("errorList");
        errorList.innerHTML = "";

        error.forEach(error => {
            const li = document.createElement("li");
            li.textContent = error;
            errorList.appendChild(li);
        });

        document.getElementById("errorModal").style.display="block";
    }

    function showReviewModal() {
        let modalContent ="";
        const  elements = document.querySelector("form").elements;

        for (let i = 0; i < elements.length -2; i++) {
            const element = elements[i];
            let value = element.value;

            const fieldName = getLabelForInput(element.id);

            if (element.name === "pwd2") {
                continue;
            }
            if (element.type === "checkbox" || element.type === "radio") {
                if (element.checked) {
                const groupLabel = inputGroupLabels[element.id] || fieldName;
                modalContent += "<div><dt>${groupLabel}:</dt> <dd>${fieldName}</dd></div>";
                }
            } else if (element.name === "pwd" || element.name === "pwd2") {
                let obscured = obscurepwd(value);
                modalContent += `<div><dt>${fieldName}:</dt> <dd>${obscured}</dd></div>`;
                } else if (element.name === 'ssn') {
                let obscuredSSN = obscuressn(value);
                modalContent += `<div><dt>${fieldName}:</dt> <dd>${obscuredSSN}</dd></div>`;
                } else {
                modalContent += `<div><dt>${fieldName}:</dt> <dd>${value}</dd></div>`;
                }
            }
        document.getElementById("modal-info").innerHTML = modalContent;

        document.getElementById("reviewModal").style.display = "block";
    }
    document.getElementsByClassName("closeError")[0].onclick = function () {
        closeErrorModal();
    }
    document.getElementById("cancelError").onclick = function () {
        closeErrorModal();
    }
    document.getElementsByClassName("closeReview")[0].onclick = function() {
        closeReviewModal();
    }
    document.getElementById("cancelReview").onclick = function() {
        closeReviewModal();
    }

    window.onlcick = function (event) {
        const reviewModal = document.getElementById("reviewModal");
        const errorModal = document.getElementById("errorModal");

        if (event.target === reviewModal) {
            closeReviewModal();
        } else if (event.target === errorModal) {
            closeErrorModal();
        }
    }
});

/*function pwdentry() {
    var pwdinput = document.getElementById("pwd").value;
    if (pwdinput.search(/[A-Z]/) < 0) {
        document.getElementById("pwd_message").innerHTML = "Invalid: 1 Uppercase letter required.";
        error_flag = 1;
    } else {
        document.getElementById("pwd_message").innerHTML = "";
    }
    
    if (pwdinput.search(/[a-z]/) < 0) {
        document.getElementById("pwd_message").innerHTML = "Invalid: 1 lowercase letter required.";
        error_flag = 1;
    } else {
        document.getElementById("pwd_message").innerHTML = "";
    }

    if (pwdinput.search(/[0-9]/) < 0) {
        document.getElementById("pwd_message").innerHTML = "Invalid: 1 number required.";
        error_flag = 1;
    } else {
        document.getElementById("pwd_message").innerHTML = "";
    }   

    if (pwdinput.search (/!@#$%&*\-_.+\/) < 0) {
        document.getElementById("pwd_message").innerHTML = "Invalid: 1 special character required.";
        error_flag = 1;
    } else {
        document.getElementById("pwd_message").innerHTML = "";
    }

    if (pwdinput.length < 8) {
        document.getElementById("pwd_message").innerHTML = "Invalid: 8 characters required.";
        error_flag = 1;
    } else {
        document.getElementById("pwd_message").innerHTML = "";
    }
}

function checkpwd2() {
    x = document.getElementById("pwd1").value;
    y = document.getElementById("pwd2").value;
    if (x==y) {
        document.getElementById("pwd2_message").innerHTML = "Passwords match.";
    } else {
        document.getElementById("pwd2_message").innerHTML = "Passwords do not match.";
        error_flag = 1;
    }
}

function validateForm() {
    error_flag = 0;
    checkfirstname();
    checkmiddle();
    checklastname();
    checkaddress1();
    checkaddress2();
    checkcity();
    checkstate();
    checkzip();
    checkphone();
    checkemail();
    checkusr();
    pwdentry();
    checkpwd2();
    if (error_flag > 0) {
        alert("Please fix the errors!");
    } else {
        document.getElementById("submit").disabled = false;
    }
}

/*function displayFormOutput(formData, error) {
    const container = document.getElementById("outputformdata");
    container.innerHTML = "";
    const outputForm = document.createElement('form');
    outputForm.className = 'readonly-form';

    formData.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = key;
        input.value = value;
        input.className = 'readonly';
        input.readOnly = true;

        if (error.some(error => error.toLowerCase().includes(key.toLowerCase()))) {
            input.classList.add('error');
        }
            outputForm.appendChild(input);
            outputForm.appendChild(document.createElement('br'));
        });

    error.forEach(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.className = 'error';
        outputForm.appendChild(errorElement);
        });

        container.appendChild(outputForm);
}*/