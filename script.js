
var darkModeToggle = document.getElementById('togglebutton');


function enableDarkMode() {
    document.body.classList.add('darkmode');
    darkModeToggle.textContent = "Light Mode";
    localStorage.setItem('darkMode', 'enabled'); 
}

function disableDarkMode() {
    document.body.classList.remove('darkmode');
    darkModeToggle.textContent = "Dark Mode"; 
    localStorage.setItem('darkMode', 'disabled'); 
}


if (typeof(Storage) !== "undefined" && localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode(); 
} else {
    disableDarkMode(); 
}


darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        disableDarkMode(); 
    } else {
        enableDarkMode(); 
    }
});
