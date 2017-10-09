var powerSocketButton = document.getElementsByClassName('power-socket-section__button')[0]

var isPowerSocketActive = true

powerSocketButton.onclick = function(event) {

    if (isPowerSocketActive) {

        $.ajax({
            url: 'http://192.168.0.1:8000/offRelay'
        })
        .done(function(data) {
          console.log('Power socket: ' + data)

          if (data != 'true') return

          isPowerSocketActive = false

          powerSocketButton.style.backgroundColor = 'lightcoral'
          powerSocketButton.value = 'Off'
        })
        .fail(function(error) {
            console.log(error)
        });
    } else {

        $.ajax({
            url: 'http://192.168.0.1:8000/onRelay'
        })
        .done(function(data) {
          console.log('Power socket: ' + data)

          if (data != 'true') return

          isPowerSocketActive = true

          powerSocketButton.style.backgroundColor = 'lightgreen'
          powerSocketButton.value = 'On'
        })
        .fail(function(error) {
            console.log(error)
        });
    }
}
