function logKey(event) {
    document.getElementById("extra").textContent = `${event.key}`;


}

addEventListener("keydown", logKey);

function changeText() {
    const divElement = document.getElementById("reappear");
    divElement.textContent = "Contact me if you are interested on @u_kozoderovic";
   
}