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

/**function typing(){
    if(i<title.length){
        document.getElementById("title").innerHTML += title.charAt(i);
        i++
        setTimeout(typing,50);
    }
}
typing();
*/
function typing(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function() {
        if(i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

var speed = 100;
var h5 = document.getElementById('logDate');
var delay = h5.innerHTML.length * speed + speed;

typing(h5, speed);