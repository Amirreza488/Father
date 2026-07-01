function showMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "❤️ بابا، دوستت دارم و همیشه قدردان تمام زحمت‌هات هستم. ❤️";

    message.style.opacity = "0";

    setTimeout(() => {
        message.style.transition = "1s";
        message.style.opacity = "1";
    }, 100);

}

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1.5s";

        document.body.style.opacity = "1";

    }, 100);

}