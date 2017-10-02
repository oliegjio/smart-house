var temperature, humidity;

setInterval(function() {
    $.ajax({
        url: 'http://192.168.0.148:8000/fake-ping'
    })
    .done(function(data) {
        var newData = data.split(' ');
        temperature = newData[0]; 
        humidity = newData[1];
    })
    .fail(function(error) {
        console.log(error);
    });
}, 1000);
    
