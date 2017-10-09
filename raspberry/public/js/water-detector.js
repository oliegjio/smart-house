var waterStatus

var waterSectionProgress = document.getElementsByClassName('water-section__progress')[0]
var waterSectionValue = document.getElementsByClassName('water-section__value')[0]

function updateLightProgress(value) {
    waterSectionProgress.style.width = value + '%'
    waterSectionValue.innerHTML = value + '%'
}

var pingWaterDetector = function() {
    $.ajax({
        url: 'http://192.168.0.5/checkLight'
    })
    .done(function(response) {
        waterStatus = response

        updateLightProgress(waterStatus)
    })
    .fail(function(error) {
        console.log(error)
    })
}

pingWaterDetector()