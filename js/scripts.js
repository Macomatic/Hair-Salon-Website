function onLoad() {
    console.log(localStorage.getItem("fullname"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("domain"));
    var url = window.location.href;
    if (localStorage.getItem("fullname") == null || url.includes(index.html)) {
        localStorage.clear();
    }
}