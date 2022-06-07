function book(text) {
    localStorage.setItem("stylist", text);
    window.location.href = "bookService.html";
}

function onLoad() {
    localStorage.clear();
}