const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const radioButtons = document.querySelectorAll('.toggle__wrapper input');

const setDarkMode = () => {
    document.querySelector('body').className = 'dark';
};

const setLightMode = () => {
    document.querySelector('body').className = 'light';
};

for(let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (event) => {
        if(darkButton.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }    
    })
};

const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        darkButton.click();
    } else if (localStorage.getItem('colorMode') == 'light'){
        lightButton.click();
    }   
};

setColorMode();



