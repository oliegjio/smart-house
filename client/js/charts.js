var tLabel = document.getElementsByClassName('t-and-h-section__t-value')[0];
var hLabel = document.getElementsByClassName('t-and-h-section__h-value')[0];

var tCanvas = document.getElementsByClassName('t-and-h-section__t-canvas')[0];
var tContext = tCanvas.getContext('2d');

Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.line.borderWidth = 1;

var tChart = new Chart(tContext, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature',
            data: [],
            backgroundColor: ['rgba(200, 0, 0, .15)'],
            borderColor: ['rgba(255, 0, 0, .3)']
        }]
    }
});

var hCanvas = document.getElementsByClassName('t-and-h-section__h-canvas')[0];
var hContext = hCanvas.getContext('2d');

var hChart = new Chart(hContext, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humidity',
            data: [],
            backgroundColor: ['rgba(0, 0, 200, .15)'],
            borderColor: ['rgba(0, 0, 255, .3)']
        }]
    }
});

setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var theDate = hours + ':' + minutes + ':' + seconds;

    if (!temperature || !humidity) return;

    tChart.data.datasets[0].data.push(temperature);
    tChart.data.labels.push(theDate)

    hChart.data.datasets[0].data.push(humidity);
    hChart.data.labels.push(theDate)

    tChart.update();
    hChart.update();

    tLabel.innerHTML = temperature;
    hLabel.innerHTML = humidity;
}, 1000);

// tAndHChart.data.datasets[0].data[0] = 60;
// tAndHChart.update();
