window.addEventListener("load", () => {
//tempo em segundos
let sec = prompt ("Quantos segundos você quer marcar?");

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60; 

    if (segundosRestantes <10) {
        sec = "0" + sec;
    };

    if (min <10) {
        min = "0" + min;
    }
// Vai gerar o Formato 03:02
    countDiv.innerHTML = min + ":" + segundosRestantes;
// Condição final
    if (sec > 0) {
        sec = sec -1;
    }
    else {
        countDiv.innerHTML = "Acabou";
    }
};
const countDown = setInterval(() => secpass(), 1000,);
});