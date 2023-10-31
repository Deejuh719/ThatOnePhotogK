import questions from 'json/questions.json' assert { type: 'json' }
import users from 'json/users.json' assert { type: 'json' }

/*dark-mode*/
const body = document.querySelector('body');
const buttons = document.querySelector('button')
const buttonLike =document.getElementById('button-like')
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

document.addEventListener("DOMContentLoaded", function() {
    function toggleMode() {
        body.classList.toggle('dark-mode');
    }

    modeToggle.addEventListener('click', toggleMode);
});

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


/**Modal form
 * Form validation */
function submitForm() {
    var courseSelect = document.getElementById('selectCourse');
    if(courseSelect.value === ''){
        courseSelect.classList.add('red-border');
        return false;
    } else {
        courseSelect.classList.remove('red-border');
        resetForm();
        document.getElementById('submitted').style.display = 'block';
        return false;
    }
}

function clearForm(){
    var form = document.getElementById('learnMore');
    form.reset();
    document.getElementById('clearMessage').style.display = 'block';
}