var lightStatus

var lightSectionProgress = document.getElementsByClassName('light-section__progress')[0]
var lightSectionValue = document.getElementsByClassName('light-section__value')[0]

function updateLightProgress(value) {
  var percent = 100 - Math.floor(value / 1024 * 100)

  lightSectionProgress.style.width = percent + '%'
  lightSectionValue.innerHTML = percent + '%'
}

var pingLightDetector = function() {
    $.ajax({
        url: 'http://192.168.0.1:8000/checkLight'
    })
    .done(function(response) {
      console.log('Light: ' + response)

      if (response == '') return

      lightStatus = response

      updateLightProgress(lightStatus)
    })
    .fail(function(error) {
        console.log(error)
    })
}

pingLightDetector()
