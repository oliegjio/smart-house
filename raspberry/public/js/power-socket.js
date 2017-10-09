var powerSocketButton = document.getElementsByClassName('power-socket-section__button')[0]

var isPowerSocketActive = true

powerSocketButton.onclick = function(event) {

    if (isPowerSocketActive) {

        $.ajax({
            url: 'http://192.168.0.1:8000/offRelay'
        })
        .done(function(data) {
            if (data != 'true') return
        })
        .fail(function(error) {
            console.log(error)
        });

        isPowerSocketActive = false

        powerSocketButton.style.backgroundColor = 'lightcoral'
        powerSocketButton.value = 'Off'

    } else {

        $.ajax({
            url: 'http://192.168.0.1:8000/onRelay'
        })
        .done(function(data) {
            if (data != 'true') return
        })
        .fail(function(error) {
            console.log(error)
        });

        isPowerSocketActive = true

        powerSocketButton.style.backgroundColor = 'lightgreen'
        powerSocketButton.value = 'On'
    }
}
