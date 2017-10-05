var temperature, humidity, people;

var peopleValue = document.getElementsByClassName('people-section__value')[0];

var updateCharts = function() {
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
}

var updatePeople = function() {
    peopleValue.innerHTML = people;
}

setInterval(function() {
    $.ajax({
        url: 'http://192.168.0.148:8000/fake-ping'
    })
    .done(function(data) {
        var newData = data.split(' ');
        
        temperature = newData[0]; 
        humidity = newData[1];
        people = newData[2];
        
        updateCharts();
        updatePeople();
    })
    .fail(function(error) {
        console.log(error);
    });
}, 1000);
    
