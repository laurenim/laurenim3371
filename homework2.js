//////Name: Lauren Morales, File name: homework1.js/////

function setup() {
    var error_flag = 0;
    console.log(error_flag);
}

function removedata1() {
    document.getElementById("outputformdata").innerHTML = "";
  }

function getdata1() {
    var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
    formoutput = "<table class='output'><th>Dataname</th><th>Type</th<th>Value</th>";
    for (i = 0; i < formcontents.clientHeight; i++) {
        console.log("item: "+i+" "formcontents.elements[i].name+" = "+formcontents.elements[i].value");
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
                case "button": case: "submit": case "reset":
                    formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                    formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>"+ formcontents.elements[i].name + "</td></tr>";
                    break;
                    default;
                    formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
                    formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].name + "</td></tr>";
            }
        }
    }
    if (formoutput.length>0) {
        formoutput = formoutput + "</table>";
        document.getElementById("outputformdata").innerHTML = formoutput;
    }
}

function validateInputs() {
    let error = [];

    const namePattern = /^[A-Za-z\s"'"-]{2,}$/;
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;

    if (!namePattern.test(fName)) {
        error.push("Letters, hyphens, apostrophes only.");
    } else if(fName.length < 2) { 
        error.push("First name too short.");
        }
    
    if (!namePattern.test(lName)) {
        error.push("Letters, hyphens, apostrophes only.");
    } else if (lName.length < 2) {
            error.push("Last name too short.");
        }
    
    const mInitial = document.getElementById("minitial").value;

    if (!mInitial.match(/^[A-Z]$/)){
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

    const dob = document.getElementById("dob").value;

    if (!dob.match(/^\d{2}-\d{2}-\d{4}$/)) {
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
    const address1 = document.getElementById("address1").value;
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
    const user = document.getElementById("usr").value.toLowerCase();

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
    if (pwd.value !== pwd2.value) {
        error.push ("Passwords must match");
    }

    return error;
}

function checkform() {
   let error_flag = 0;
   const isValid = validateInputs();
   console.log("Errors:", isValid);

   if (isValidlength > 0) {
    error_flag = 1;
        alert("Please fix errors!");
    }
    else {
        document.getElementById("submit").disabled = false;
    }
}

function formInput(event) {
    event.preventDefault();
    const error = validateInputs();
    const formData = new FormData(document.getElementById('signup'));
    displayFormOutput(formData, error);
}


function displayFormOutput(formData,error) {
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
}