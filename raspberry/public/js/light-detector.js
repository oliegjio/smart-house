var lightStatus

var lightSectionProgress = document.getElementsByClassName('light-section__progress')[0]
var lightSectionValue = document.getElementsByClassName('light-section__value')[0]

function updateLightProgress(value) {
    lightSectionProgress.style.width = value + '%'
    lightSectionValue.innerHTML = value + '%'
}

var pingLiteDetector = function() {
    $.ajax({
        url: 'http://192.168.0.5/checkLight'
    })
    .done(function(response) {
        lightStatus = response

        updateLightProgress(lightStatus)
    })
    .fail(function(error) {
        console.log(error)
    })
}

pingLiteDetector()