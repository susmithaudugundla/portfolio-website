let alphaPattern = "^[A-Za-z]+$";
let numberPattern = "^[6789][0-9]{9}$"
let gmailPattern = "(@gmail.com)$";
let passwordPattern1 = "^.*[A-Z].*$";
let passwordPattern2 = "^.*[a-z].*$";
let userDetails = {};

document.getElementById("favcolor2").onchange = () => {

    let favColor1Element = document.getElementById("favcolor1").value;
    let favColor2Element = document.getElementById("favcolor2").value;
    document.body.style.backgroundImage = `linear-gradient(90deg,${favColor1Element},${favColor2Element})`;
};
document.getElementById("favcolor1").onchange = () => {
    let favColor1Element = document.getElementById("favcolor1").value;
    let favColor2Element = document.getElementById("favcolor2").value;
    document.body.style.backgroundImage = `linear-gradient(90deg,${favColor1Element},${favColor2Element})`;
};

document.getElementById("fname").onfocus = () => {
    document.getElementById("fnameRequired").innerHTML = "* Required field";

};
document.getElementById("lname").onfocus = () => {
    document.getElementById("lnameRequired").innerHTML = "* Required field";

};
document.getElementById("number").onfocus = () => {
    document.getElementById("numberRequired").innerHTML = "* Required field";

};
document.getElementById("mail").onfocus = () => {
    document.getElementById("mailRequired").innerHTML = "* Required field";

};
document.getElementById("password").onfocus = () => {
    document.getElementById("passwordRequired").innerHTML = "* Required field";

};
document.getElementById("confirmPassword").onfocus = () => {
    document.getElementById("confirmPasswordRequired").innerHTML = "* Required field";

};
document.getElementById("date").onfocus = () => {
    document.getElementById("dateRequired").innerHTML = "* Required field";

};
document.getElementById("fname").onblur = () => {
    let fnameElement = document.getElementById("fname").value;
    let matchingVariable = fnameElement.match(alphaPattern);
    if (matchingVariable == null) {
        alert("Invalid Value");
    }
    else {
        userDetails["First Name"] = fnameElement;
        document.getElementById("fnameRequired").innerHTML = "";
    }
};
document.getElementById("lname").onblur = () => {
    let lnameElement = document.getElementById("lname").value;
    let matchingVariable = lnameElement.match(alphaPattern);
    if (matchingVariable == null) {
        alert("Invalid Value");
    }
    else {
        userDetails["Last Name"] = lnameElement;
        document.getElementById("lnameRequired").innerHTML = "";
    }
};
document.getElementById("number").onblur = () => {
    let mobileNumberElement = document.getElementById("number").value;
    let matchingVariable = mobileNumberElement.match(numberPattern);
    if (matchingVariable == null) {
        alert("Invalid Value");
    }
    else {
        userDetails["Mobile Number"] = mobileNumberElement;
        document.getElementById("numberRequired").innerHTML = "";
    }
};
document.getElementById("mail").onblur = () => {
    let gmailElement = document.getElementById("mail").value;
    let matchingVariable = gmailElement.match(gmailPattern);
    if (matchingVariable == null) {
        alert("Invalid Value");
    }
    else {
        userDetails["Mail"] = gmailElement;
        document.getElementById("mailRequired").innerHTML = "";
    }
};
document.getElementById("password").onblur = () => {
    let passwordElement = document.getElementById("password").value;
    let matchingVariable1 = passwordElement.match(passwordPattern1);
    let matchingVariable2 = passwordElement.match(passwordPattern2);
    if (matchingVariable1 == null) {
        alert("Invalid Value");
    }
    else if (matchingVariable2 == null) {
        alert("Invalid Value");
    }
    else {
        userDetails["Password"] = passwordElement;
        document.getElementById("passwordRequired").innerHTML = "";
    }
};
document.getElementById("confirmPassword").onblur = () => {
    let confirmPasswordElement = document.getElementById("confirmPassword").value;
    let passwordElement = document.getElementById("password").value;
    if (passwordElement !== confirmPasswordElement) {
        alert("Invalid Value");
        confirmPasswordElement.innerHTML="";
    }
    else {
        document.getElementById("confirmPasswordRequired").innerHTML = "";
    }
};
document.getElementById("date").onblur = () => {
    let dateElement = document.getElementById("date").value;
    let minDate = "2002-01-01";
    if (dateElement < minDate) {
        alert("Invalid Value");
    }
    else {
        userDetails["Date"] = dateElement;
        document.getElementById("dateRequired").innerHTML = "";
    }
};

function consoleUserDetails(event) {
    alert("Submitted");
    event.preventDefault();
    let genderElement = document.getElementsByName('gender');
    let i = 0;
    for (i = 0; i < genderElement.length; i++) {
        if (genderElement[i].checked)
            break;
    }
    userDetails["Gender"] = genderElement[i].value;
    userDetails["Branch"] = document.getElementById("branch").value;
    userDetails["Address"] = document.getElementById("address").value;
    userDetails["Typing speed"] = document.getElementById("a").value;
    console.log(userDetails);
}
