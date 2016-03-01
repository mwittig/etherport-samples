var five = require("johnny-five");
var EtherPort = require("etherport");
var board = new five.Board({
    port: new EtherPort(3030)
});

board.on("ready", function() {
    console.log('ready');
    var led = five.Led.RGB({
        pins: {
            red: 7,
            green: 6,
            blue: 5
        },
        isAnode: true
    });
    led.on();
    setInterval(function() {
        function getRandomValue() {
            return Math.floor(Math.random() * 256)
        }
        led.color({
            red: getRandomValue(),
            green: getRandomValue(),
            blue: getRandomValue()});
    }, 1000)
});