let presses = 0;
const counter = document.getElementById("counter");
const cat = document.getElementById("cat");


function increaseFunction() {
    presses += 1;

    if (presses === 100) {
        return window.location.replace('./yay.html');
    }

    counter.innerHTML = `You have clicked the cat ${presses} times.`;
}


cat.onmousedown = () => {
    increaseFunction();
}
