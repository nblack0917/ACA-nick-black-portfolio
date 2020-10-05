let click = false;

const fadeInName = () => {
    const name = document.getElementById("main-name");
    if (!click){ console.log("click")
    name.classList.add("animate__animated", "animate__fadeIn", "animate__slower");
    click = true;
    } else {
        name.classList.remove("animate__fadeIn", "animate__slower");
        name.classList.add("animate__backInUp");
    click = false;
    }
}

function fadeOutPic() {
    const picture = document.getElementById("portrait");
    picture.classList.add("animate__animated", "animate__fadeOut", "animate__slow")
}

function fadeInPic() {
    const picture = document.getElementById("portrait");
    picture.classList.remove("animate__fadeOut", "animate__slow");
    picture.classList.add("animate__fadeIn");
}

function showPhone() {
    const phone = document.getElementById("phoneNum");
    phone.style.visibility = "visible";
    phone.classList.add("animate__animated", "animate__fadeIn")
}