var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for(let i = 0; i < numberOfDrumButtons; i++) {

    //detecting click press
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var buttonInnerHTML = this.textContent;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch(key) {
        case "w":
            let audio1 = new Audio("sounds/tom1.mp3");
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio('sounds/tom2.mp3');
            audio2.play();
            break;
        
        case "s":
            let audio3 = new Audio('sounds/tom3.mp3');
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio('sounds/tom4.mp3');
            audio4.play();
            break;

        case "j":
            let audio5 = new Audio('sounds/kickbass.mp3');
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;

        case "l":
            let audio7 = new Audio('sounds/snare.mp3');
            audio7.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}