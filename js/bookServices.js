function submit() {
    var validName = document.getElementById("fullname").value == "";
    var validEmail = document.getElementById("email").value == "";
    var validDomain = document.getElementById("domain").value == "";
    var validService = document.getElementById("services").value == "";
    var validStylist = document.getElementById("stylists").value == "";
    var validDate = document.getElementById("startDate").value == "";
    var validTime = document.getElementById("appt").value == "";

    // I want to store some information in case they want to do consecutive booking of appointments; makes UX better

    

    


    var valid = (!validName && !validEmail && !validDomain && !validService && !validStylist && !validDate && !validTime);

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var domain = document.getElementById("domain").value;

    localStorage.setItem("fullname",name);
    localStorage.setItem("email", email);
    localStorage.setItem("domain", domain);


    if (valid) {
        // this is where i could do authentication/validation as well as submitting to backend
        window.location.href = "confirmation.html";
    }

    else {
        alert("There is missinng information. Please fill out all of the fields!");
    }


}

function onLoad() {
    let stylist = localStorage.getItem("stylist");
    if (stylist != null) {
        stylistDropdown = document.getElementById("stylists");
        stylistDropdown.value = stylist;
    }

    let storageName = localStorage.getItem("fullname");
    let storageEmail = localStorage.getItem("email");
    let storageDomain = localStorage.getItem("domain");

    if (storageName != null && storageEmail != null && storageDomain != null) {
        fullNameInput = document.getElementById("fullname");
        emailInput = document.getElementById("email");
        domainInput = document.getElementById("domain");
        fullNameInput.value = storageName;
        emailInput.value = storageEmail;
        domainInput.value = storageDomain;
    }
}