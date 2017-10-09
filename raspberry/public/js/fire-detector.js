var fireStatus

var fireSection = document.getElementsByClassName('fire-section')[0]
var fireSectionLabel = document.getElementsByClassName('fire-section__label')[0]

var updateFireLabel = function(value) {
  if (value == 'true') {
    fireSectionLabel.style.color = 'darkred'
    fireSectionLabel.innerHTML = 'Fire detected!'

    fireSection.style.backgroundColor = 'lightcoral'
  } else if (value == 'false') {
    fireSectionLabel.style.color = '#444444'
    fireSectionLabel.innerHTML = 'Fire is not detected'

    fireSection.style.backgroundColor = 'lightgreen'
  }
}

var pingFireDetector = function() {
    $.ajax({
        url: 'http://192.168.0.1:8000/checkFire'
    })
    .done(function(response) {
        fireStatus = response

        updateFireLabel(fireStatus)
    })
    .fail(function(error) {
        console.log(error)
    })
}

pingFireDetector()
