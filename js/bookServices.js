function submit() {
    var name = document.getElementById("fullname").value == "";
    var email = document.getElementById("email").value == "";
    var domain = document.getElementById("domain").value == "";
    var service = document.getElementById("services").value == "";
    var stylist = document.getElementById("stylists").value == "";
    var date = document.getElementById("startDate").value == "";
    var time = document.getElementById("appt").value == "";
    // console.log(name);
    // console.log(email);
    // console.log(domain);
    // console.log(service);
    // console.log(stylist);
    // console.log(date);
    // console.log(time);

    var valid = (!name && !email && !domain && !service && !stylist && !date && !time);
    console.log(valid);

    if (valid) {
        // this is where i could do authentication/validation as well as submitting to backend
        window.location.href = "confirmation.html";
    }

    else {
        alert("There is missinng information. Please fill out all of the fields!");
    }


}