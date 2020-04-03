let namePattern = "^[A-Za-z]+$";
let numberPattern = "^[6789][0-9]{9}$";
let gmailPattern = "(@gmail.com)$";
let passwordPattern = "(?=.*[A-Z])(?=.*[a-z]).*";
let userDetails = {};
let favColor1Element = document.getElementById("favcolor1");
let favColor2Element = document.getElementById("favcolor2");
let firstnameElement = document.getElementById("firstname");
let lastnameElement = document.getElementById("lastname");
let mobileNumberElement = document.getElementById("number");
let gmailElement = document.getElementById("mail");
let passwordElement = document.getElementById("password");
let confirmPasswordElement = document.getElementById("confirmPassword");
let genderElement = document.getElementsByName("gender");
let dateElement = document.getElementById("date");
let branchElement = document.getElementById("branch");
let addressElement = document.getElementById("address");
let typingRangeElement = document.getElementById("typingRange");
let termsAndConditionsElement = document.getElementById("termsAndConditions");
let firstnameRequiredElement = document.getElementById("firstnameRequired");
let lastnameRequiredElement = document.getElementById("lastnameRequired");
let numberRequiredElement = document.getElementById("numberRequired");
let mailRequiredElement = document.getElementById("mailRequired");
let passwordRequiredElement = document.getElementById("passwordRequired");
let confirmPasswordRequiredElement = document.getElementById("confirmPasswordRequired");
let dateRequiredElement = document.getElementById("dateRequired");
let termsAndConditionsRequiredElement = document.getElementById("termsAndConditionsRequired");
let requiredVariable = "* Required field";
let invalidVariable = "Invalid value";
let wrongInputFieldBorder = "1px solid red";
let correctInputFieldBorder = "1px solid green";

favColor1Element.onchange = function() { changeTheme() };
favColor2Element.onchange = function() { changeTheme() };

function changeTheme() {
    document.body.style.backgroundImage = `linear-gradient(90deg,${favColor1Element.value},${favColor2Element.value})`;
}

firstnameElement.onfocus = () => {
    firstnameRequiredElement.innerHTML = requiredVariable;
};
lastnameElement.onfocus = () => {
    lastnameRequiredElement.innerHTML = requiredVariable;
};
mobileNumberElement.onfocus = () => {
    numberRequiredElement.innerHTML = requiredVariable;
};
gmailElement.onfocus = () => {
    mailRequiredElement.innerHTML = requiredVariable;
};
passwordElement.onfocus = () => {
    passwordRequiredElement.innerHTML = requiredVariable;
};
confirmPasswordElement.onfocus = () => {
    confirmPasswordRequiredElement.innerHTML = requiredVariable;
};
dateElement.onfocus = () => {
    dateRequiredElement.innerHTML = requiredVariable;
};

firstnameElement.oninput = function() { changeBorderColorAcoordingToGivenInputs(firstnameElement) };
lastnameElement.oninput = function() { changeBorderColorAcoordingToGivenInputs(lastnameElement) };

function changeBorderColorAcoordingToGivenInputs(currentFocusField) {
    (!currentFocusField.value.match(namePattern)) ? changeWrongInputFieldBorder(currentFocusField): changeCorrectInputFieldBorder(currentFocusField);
}

mobileNumberElement.oninput = () => {
    (!mobileNumberElement.value.match(numberPattern)) ? changeWrongInputFieldBorder(mobileNumberElement): changeCorrectInputFieldBorder(mobileNumberElement);
};
gmailElement.oninput = () => {
    (!gmailElement.value.match(gmailPattern)) ? changeWrongInputFieldBorder(gmailElement): changeCorrectInputFieldBorder(gmailElement);
};
passwordElement.oninput = () => {
    (!passwordElement.value.match(passwordPattern)) ? changeWrongInputFieldBorder(passwordElement): changeCorrectInputFieldBorder(passwordElement);
};
confirmPasswordElement.oninput = () => {
    (passwordElement.value !== confirmPasswordElement.value) ? changeWrongInputFieldBorder(confirmPasswordElement): changeCorrectInputFieldBorder(confirmPasswordElement);
};

firstnameElement.onblur = () => {
    if (!firstnameElement.value.match(namePattern) && firstnameElement.value !== "") {
        firstnameRequiredElement.innerHTML = invalidVariable;
    }
    else if (firstnameElement.value !== "") {
        appendUserDetails("First Name", firstnameElement.value);
        firstnameRequiredElement.innerHTML = "";
    }
};
lastnameElement.onblur = () => {
    if (!lastnameElement.value.match(namePattern) && lastnameElement.value !== "") {
        lastnameRequiredElement.innerHTML = invalidVariable;
    }
    else if (lastnameElement.value !== "") {
        appendUserDetails("Last Name", lastnameElement.value);
        lastnameRequiredElement.innerHTML = "";
    }
};
mobileNumberElement.onblur = () => {
    if (!mobileNumberElement.value.match(numberPattern) && mobileNumberElement.value !== "") {
        numberRequiredElement.innerHTML = invalidVariable;
    }
    else if (mobileNumberElement.value !== "") {
        appendUserDetails("Mobile Number", mobileNumberElement.value);
        numberRequiredElement.innerHTML = "";
    }
};
gmailElement.onblur = () => {
    if (!gmailElement.value.match(gmailPattern) && gmailElement.value !== "") {
        mailRequiredElement.innerHTML = invalidVariable;
    }
    else if (gmailElement.value !== "") {
        appendUserDetails("Mail Id", gmailElement.value);
        mailRequiredElement.innerHTML = "";
    }
};
passwordElement.onblur = () => {
    let confirmPasswordElement = document.getElementById("confirmPassword").value;
    if (!passwordElement.value.match(passwordPattern) && (passwordElement.value !== "")) {
        passwordRequiredElement.innerHTML = invalidVariable;
    }
    else if (passwordElement.value !== "") {
        appendUserDetails("Password", passwordElement.value);
        passwordRequiredElement.innerHTML = "";
    }
    if (passwordElement.value !== confirmPasswordElement && confirmPasswordElement !== "") {
        confirmPasswordRequiredElement.innerHTML = "Password didn't match";
        document.getElementById("confirmPassword").value = "";
    }
    else if (confirmPasswordElement !== "") {
        confirmPasswordRequiredElement.innerHTML = "";
    }

};
confirmPasswordElement.onblur = () => {
    if (passwordElement.value !== confirmPasswordElement.value && confirmPasswordElement.value !== "") {
        confirmPasswordRequiredElement.innerHTML = "Password didn't match";
        confirmPasswordElement.value = "";
    }
    else if (confirmPasswordElement.value !== "") {
        confirmPasswordRequiredElement.innerHTML = "";
    }
};
dateElement.onblur = () => {
    let minDate = "2002-01-01";
    if (dateElement.value < minDate) {
        dateRequiredElement.innerHTML = invalidVariable;
    }
    else {
        appendUserDetails("Date Of Birth", dateElement.value);
        dateRequiredElement.innerHTML = "";
    }
};
termsAndConditionsElement.onclick = () => {
    if (termsAndConditionsElement.checked) {
        termsAndConditionsRequiredElement.innerHTML = "";
        appendUserDetails("Terms and Conditions", "True");
    }
    else {
        termsAndConditionsRequiredElement.innerHTML = requiredVariable;
    }
};

function changeWrongInputFieldBorder(currentFocusField) {
    currentFocusField.style.border = wrongInputFieldBorder;
}

function changeCorrectInputFieldBorder(currentFocusField) {
    currentFocusField.style.border = correctInputFieldBorder;
}

function consoleUserDetails(event) {
    alert("Submitted");
    event.preventDefault();
    let i = 0;
    for (i = 0; i < genderElement.length; i++) {
        if (genderElement[i].checked)
            break;
    }
    appendUserDetails("Gender", genderElement[i].value);
    appendUserDetails("Branch", branchElement.value);
    appendUserDetails("Address", addressElement.value);
    appendUserDetails("Typing Speed", typingRangeElement.value);
    console.log(userDetails);
}

function appendUserDetails(key, value) {
    userDetails[key] = value;
}
