var powerSocketButton = document.getElementsByClassName('power-socket-section__button')[0];
var isPowerSocketActive = true;

powerSocketButton.onclick = function(event) {
    var request = new XMLHttpRequest();

    if (isPowerSocketActive) {
        request.open('GET', 'http://192.168.0.183:8000/power-socket-off', false);
        request.send(null);

        if (request.responseText != 'true') return;

        isPowerSocketActive = false;
        powerSocketButton.style.backgroundColor = 'lightcoral';
        powerSocketButton.value = 'Off'
    } else {
        request.open('GET', 'http://192.168.0.183:8000/power-socket-on', false);
        request.send(null);

        if (request.responseText != 'true') return;

        isPowerSocketActive = true;
        powerSocketButton.style.backgroundColor = 'lightgreen';
        powerSocketButton.value = 'On'
    }
};
