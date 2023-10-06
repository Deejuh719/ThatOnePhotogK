/*dark-mode*/
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    body.classList.toggle('dark-mode');
}
modeToggle.addEventListener('click', toggleMode);

/*mywork slider*/
const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;

function reset(){
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
}

function initializeSlider() {
    reset();
    images[currentIndex].classList.add('active');
}

function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
}

function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
}

initializeSlider();

previousImage.addEventListener('click', function(){
    slideLeft();
});

nextImage.addEventListener('click', function(){
    slideRight();
});

const text = 'Log Date: 29-Jul-2023';
const text2 = 'Log Date: 22-Aug-2023';

window.addEventListener('load', function(){
    executeAsynchronously([typing, typing2], 75);
});

function executeAsynchronously(functions, timeout) {
    for (var i = 0; i < functions.length; i++) {
        setTimeout(functions[i], timeout);
    }
}

function typing(startIndex){
    var i = startIndex;
    if(i<text.length){
        document.getElementById("logDate").innerHTML += text.charAt(i);
        i++
        setTimeout(function() {
            typing(i);
        }, 75);
    }
}

function typing2(startIndex){
    var j = startIndex;
    if(j<text2.length){
        document.getElementsByClassName("h2").innerHTML += text2.charAt(j);
        j++
        setTimeout(function() {
            typing2(j);
        }, 75);
    }
}