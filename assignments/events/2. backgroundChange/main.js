//declaring

let background = document.querySelector(".color");




//add event listner to the body


background.addEventListener("mousemove", function() {
    background.style.backgroundColor = getRandomColo();
});




// random color generator

function getRandomColo(color) {
    let values = "1234567890abcdef".split("");



    let col = "#"
    for (i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15);
        col = col + values[index];
    };

    return col
}