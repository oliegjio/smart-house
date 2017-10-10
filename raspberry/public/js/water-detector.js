var waterStatus

var waterSectionProgress = document.getElementsByClassName('water-section__progress')[0]
var waterSectionValue = document.getElementsByClassName('water-section__value')[0]

function updateWaterProgress(value) {
  var percent = 100 - Math.floor(value / 1024 * 100)

  waterSectionProgress.style.width = percent + '%'
  waterSectionValue.innerHTML = percent + '%'
}

var pingWaterDetector = function() {
    $.ajax({
        url: 'http://192.168.0.1:8000/checkWater'
    })
    .done(function(response) {
      console.log('Water: ' + response)

      if (response == '') return

      waterStatus = response

      updateWaterProgress(waterStatus)
    })
    .fail(function(error) {
        console.log(error)
    })
}

pingWaterDetector()
