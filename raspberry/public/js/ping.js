var temperature, humidity, people;

var peopleValue = document.getElementsByClassName('people-section__value')[0];

var updateCharts = function() {
    if (!temperature || !humidity) return;
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var theDate = hours + ':' + minutes + ':' + seconds;

    var tChartData = tChart.data.datasets[0].data;
    var hChartData = hChart.data.datasets[0].data;

    tChartData.push(temperature);
    tChart.data.labels.push(theDate)
    hChartData.push(humidity);
    hChart.data.labels.push(theDate)

    tLabel.innerHTML = temperature;
    hLabel.innerHTML = humidity;
    
    var maxT = Math.max.apply(null, tChartData);
    var maxH = Math.max.apply(null, hChartData);
    var minT = Math.min.apply(null, tChartData);
    var minH = Math.min.apply(null, hChartData);
    
    tChart.options.scales.yAxes[0].ticks.suggestedMax = maxT + 1;
    tChart.options.scales.yAxes[0].ticks.suggestedMin = minT - 1;
    hChart.options.scales.yAxes[0].ticks.suggestedMax = maxH + 1;
    hChart.options.scales.yAxes[0].ticks.suggestedMin = minH - 1;
    
    tChart.update();
    hChart.update();
}

var updatePeople = function() {
    peopleValue.innerHTML = people;
}

setInterval(function() {
    $.ajax({
        url: 'http://192.168.0.148:8000/fake-ping'
    })
    .done(function(response) {
        var data = response.split(' ');
        
        temperature = data[0]; 
        humidity = data[1];
        people = data[2];
        
        updateCharts();
        updatePeople();
    })
    .fail(function(error) {
        console.log(error);
    });
}, 1000 );
    
