const body = document.querySelector('footer');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    footer.classList.toggle('dark-mode');
    
    const modeMessage = footer.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

    modeStatus.innerText = "Currently in" + modeMessage;
}
modeToggle.addEventListener('click', toggleMode);