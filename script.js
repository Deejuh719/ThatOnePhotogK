/*import questions from 'json/questions.json' assert { type: 'json' }
import users from 'json/users.json' assert { type: 'json' }*/

/*dark-mode*/
const buttons = document.querySelector('button')
const buttonLike =document.getElementById('button-like')
const modeStatus = document.querySelector('.mode-status');

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector('body');
    const modeToggle = document.getElementById('mode-toggle');

    function toggleMode() {
        body.classList.toggle('dark-mode');

        const currentMode = body.classList.contains('dark-mode') ? 'true':'false';
        localStorage.setItem('darkMode', currentMode);
    }

    modeToggle.addEventListener('click', toggleMode);

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if(isDarkMode){
        body.classList.add('dark-mode');
        modeToggle.checked = true;
    }
});


/*mywork slider*/
const images = document.querySelectorAll('img');
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


 /* Form validation */
function submitForm() {
    var courseSelect = document.getElementById('selectCourse');
    if(courseSelect.value === ''){
        courseSelect.classList.add('red-border');
        return false;
    } else {
        var submitted = "Form Submitted! Thank you!";
        return confirm(submitted);
        courseSelect.classList.remove('red-border');
        resetForm();
    }
}

function clearForm(){
    var form = document.getElementById('learnMore');
    form.reset();
    var cleared = "Form Submission Has Been Cancelled.";
    alert(cleared);
}

/*Form submission to json*/
function handleSubmit(event){
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.selectCourse = data.getAll('selectCourse');
    const jsonData = JSON.stringify(value);

    console.log(jsonData);
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);