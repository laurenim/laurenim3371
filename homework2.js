/*
Name: Lauren Morales, File name: homework1.js
File: homework2.js
Date created: 06/16/2024
Date Updated: 06/23/2024
version: 0.1
Purpose: Redisplay/validate data from a form
Notes: many revisions have been made since the last homework. i just needed more time to figure out where i was going wrong. I had the right idea
when i first started off by validating everything individually with the onblur in the html form. but there is/was something wrong with how the js
file is linking into the html file. I know that it is linked because there is an actual link that appears when i put it in <script src=>. It 
will take you here, but the js itself will not run unless it is just put into the <script>. there is something wrong with my computer/how
i set up vs code, and it's too complicated for me to understand. 
but you can see that the js works and the file is linked correctly in the html!
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

const today = new Date();
let text = today.toLocaleDateString();
document.getElementById("today").innerHTML = text;


let slider = document.getElementById("slider");
let output = document.getElementById("rangedisplay");
output.innerHTML = slider.value;
    slider.oninput = function() {
            output.innerHTML = this.value;
}

function removedata1() {
document.getElementById("outputformdata").innerHTML = "You started over.";
}

function validatefname() {
const fname = document.getElementById("fname").value;
const fnamePattern = /^[A-Za-z-']{2,30}$/;
if (!fnamePattern.test(fname)) {
    document.getElementById("fnameError").innerHTML = "Invalid: Letters, hyphens, and apostrophes only.";
    return false;
} else {
    document.getElementById("fnameError").innerHTML = "";
    return true;
}
}

function validateminital() {
const minital = document.getElementById("minital").value;
const minitalPattern = /^[A-Z]{1}$/;
if (!minitalPattern.test(minital)) {
    document.getElementById("minitalError").innerHTML = "Invalid: 1 capital letter only.";
    return false;
} else {
    document.getElementById("minitalError").innerHTML = "";
    return true;
}
}

function validatelname() {
const lname = document.getElementById("lname").value;
const lnamePattern = /^[A-Za-z2-5-']{2,30}$/;
if (!lnamePattern.test(lname)) {
    document.getElementById("lnameError").innerHTML = "Invalid: Letters, hyphens, and apostrophes only.";
    return false;
} else {
    document.getElementById("lnameError").innerHTML = "";
    return true;
}
}

function validatedob() {
dob = document.getElementById("dob");
/*const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}%$/;
const dob = dobInput.value.trim(); */
    
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    
    if (date > new Date()) {
        document.getElementById("dobError").innerHTML = "Invalid: Out of range.";
        dob.value = "";
        return false;
    }
    else if (date < new Date(maxDate)) {
        document.getElementById("dobError").innerHTML = "Invalid: Out of range.";
        dob.value = "";
        return false;
    }
    else {
    document.getElementById("dobError").innerHTML = "";
    return true;
    }
}    

function validatessn() {
const ssn = document.getElementById("ssn").value;
const ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
if (!ssnPattern.test(ssn)) {
    document.getElementById("ssnError").innerHTML = "Invalid: Use XXX-XX-XXXX format with hyphens.";
    return false;
} else {
    document.getElementById("ssnError").innerHTML = "";
    return true;
}
}

function validateaddress1() {
const address1 = document.getElementById("address1").value;
const address1Pattern = /^[A-Za-z0-9-'\s]{2,30}$/;
if (!address1Pattern.test(address1)) {
    document.getElementById("address1Error").innerHTML = "Invalid: Letters, numbers, hyphens, apostrophes only.";
    return false;
} else {
    document.getElementById("address1Error").innerHTML = "";
    return true;
}
}

function validateaddress2(){
const address2 = document.getElementById("address2").value;
const address2Pattern = /^[A-Za-z0-9-'\s]{0,30}$/;
if (!address2Pattern.test(address2)) {
    document.getElementById("address2Error").innerHTML = "Invalid: Letters, numbers, hyphens, apostrophes only.";
    return false;
} else {
    document.getElementById("address2Error").innerHTML = "";
    return true;
}
}

function validatecity() {
const city = document.getElementById("city").value;
const cityPattern = /^[A-Za-z\s]{2,30}$/;
if (!cityPattern.test(city)) {
    document.getElementById("cityError").innerHTML = "Invalid: Letters and spaces only.";
    return false;
} else {
    document.getElementById("cityError").innerHTML = "";
    return true;
}
}

function validatezip() {
const zip = document.getElementById("zip").value;
let zipPattern = /[0-9]{5}/;
if (!zipPattern.test(zip)) {
    document.getElementById("zipError").innerHTML = "Invalid: 5 digit zipcode only.";
    return false;
} 

if (zip.length > 5) {
    zip = zip.slice(0, 5);
}

zip.value = zip;
document.getElementById("zipError").innerHTML = "";
return true;
}

function validatephone() {
const phone = document.getElementById("phone");
const phonePattern = /^(\d{3}-\d{3}-\d{4})$/;
if (!phonePattern.test(phone.value)) {
    document.getElementById("phoneError").innerHTML = "Invalid: Phone must use XXX-XXX-XXXX format";
    return false;
} else {
    document.getElementById("phoneError").innerHTML = "";
    return true;
}
}

function validateemail() {
const emailInput = document.getElementById("email");
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
if (!emailPattern.test(emailInput.value)) {
    document.getElementById("emailError").innerHTML = ("Invalid: Use email@domain.dlt format only.");
    return false;
} else {
    document.getElementById("emailError").innerHTML = "";
    return true;
}
}

function validateusr() {
let usr =  document.getElementById("usr").value;
usr = usr.toLowerCase();
document.getElementById("usr").value = usr;
let usrPattern = /^[A-Za-z0-9_]+$/;

if (!isNaN(usr.charAt(0))) {
    document.getElementById("usrError").innerHTML = "Invalid: Username cannot start with a number.";
    return false;
} else if(usr.length < 5) {
    document.getElementById("usrError").innerHTML = "Invalid: Must be greater than 5 characters";
    return false;
} else if(usr.length > 30) {
    document.getElementById("usrError").innerHTML = "Invalid: Must be less than 30 characters";
    return false;
} else if (!usrPattern.test(usr)) {
    document.getElementById("usrError").innerHTML = "Invalid: Letters, numbers, underscores only.";
    return false;
} else if (!/\d/.test(usr)) {
        document.getElementById("usrError").innerHTML = "Invalid: Must contain at least one number.";
        return false;
} else {
    document.getElementById("usrError").innerHTML = "";
    return true;
}

}

function validatepwd() {
let pwd = document.getElementById("pwd").value;
let usr = document.getElementById("usr").value;
let pwdPattern = /^[A-Za-z0-9!@#\$%\^&\*-_\.+\(\)]{8,30}$/;

if (pwd.length < 8) {
    document.getElementById("pwdError").innerHTML = "Invalid: Must be greater than 8 characters.";
    return false;
} else if (pwd.length > 30) {
    document.getElementById("pwdError").innerHTML = "Invalid: Must be less than 30 characters.";
    return false;
} else if (pwd === usr || pwd.includes(usr)) {
    console.log(`Password: ${pwd}, Username: ${usr}`);
    document.getElementById("pwdError").innerHTML = "Invalid: Password cannot be the same as username or contain username.";
    return false;
} else if (!/[A-Z]/.test(pwd)) {
    document.getElementById("pwdError").innerHTML = "Invalid: Must contain at least one uppercase letter.";
    return false;
} else if (!/\d/.test(pwd)) {
    document.getElementById("pwdError").innerHTML = "Invalid: Must contain at least one number.";
    return false;
} else if (!pwdPattern.test(pwd)) {
    document.getElementById("pwdError").innerHTML = "Invalid: 8 to 30 characters, 1 upper case letter, 1 number, 1 special character.";
    return false;
} else {
    document.getElementById("pwdError").innerHTML = "";
    return true;
}
}

function validatepwd2() {
let pwd = document.getElementById("pwd").value;
let pwd2 = document.getElementById("pwd2").value;
if (pwd2 !== pwd) {
    document.getElementById("pwd2Error").innerHTML = "Invalid: Passwords do not match.";
    return false;
} else {
    document.getElementById("pwd2Error").innerHTML = "";
    return true;
}
}

function validateform() {
let fnameValid = validatefname();

let lnameValid = validatelname();
let dobValid = validatedob();
let ssnValid = validatessn();
let address1Valid = validateaddress1();
let cityValid = validatecity();
let zipValid = validatezip();
let phoneValid = validatephone();
let emailValid = validateemail();
let usrValid = validateusr();
let pwdValid = validatepwd();
let pwd2Valid = validatepwd2();

    if (fnameValid && lnameValid && dobValid && ssnValid && 
        address1Valid && cityValid && zipValid && 
        phoneValid && emailValid &&
        usrValid && pwdValid && pwd2Valid) {
        document.getElementById("submit").style.display = "inline-block";
    } else {
        document.getElementById("submit").style.display = "none";
    }
}

function getdata1() {
var formcontents = document.getElementById("signup");
var formoutput = "<table class='output'><th>Question</th><th>Response</th>";
    for (var i = 0; i < formcontents.length; i++) {
        if (formcontents.elements[i].value !="") {
            datatype = formcontents.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontents.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontents.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value+"</td></tr>";
                    }
                    break;
                case "button": 
                case "submit": 
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value + "</td></tr>";
            }
        }
    }

if (formoutput.length > 0) {
    formoutput += "</table>";
    document.getElementById("displayinputs").innerHTML = formoutput;
}
}

function removeReview() {
document.getElementById("displayinputs").innerHTML = "";
}