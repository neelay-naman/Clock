setInterval(() => {
    a = new Date();
    const ar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date = a.getDate();
    day = ar[a.getDay()];
    time = a.toLocaleTimeString('en-IN') + '<br>' + day + ', ' + date;
    document.getElementById('value').innerHTML = time
}, 1000);