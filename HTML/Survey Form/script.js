function submitForm() {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderElements).map(el => el.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || !profession) {
        alert("Please fill in all required fields with valid data.");
        return;
    }
    else if(!isValidEmail(email) ){
        alert("Please enter a valid email");
        return;
    }
    else if(!isValidMobile(mobile)){
        alert("Please enter a valid mobile number");
        return;
    }
    // Display values in the popup
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender;
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    // Show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";

}

function closePopup() {
    // Hide the popup and reset the form
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    resetForm();
}

function resetForm() {
    // Reset the form by setting input values to empty
    document.getElementById("surveyForm").reset();
}

function isValidEmail(email) {
    // Regular expression for validating email addresses
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile) {
    // Regular expression for validating phone numbers (10 digits)
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}