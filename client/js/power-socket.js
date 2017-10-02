var powerSocketButton = document.getElementsByClassName('power-socket-section__button')[0];
var isPowerSocketActive = true;

powerSocketButton.onclick = function(event) {
    if (isPowerSocketActive) {
        isPowerSocketActive = false;
        powerSocketButton.style.backgroundColor = 'lightcoral';
        powerSocketButton.value = 'Off'
    } else {
        isPowerSocketActive = true;
        powerSocketButton.style.backgroundColor = 'lightgreen';
        powerSocketButton.value = 'On'
    }
};
