var five = require("johnny-five");
var EtherPort = require("etherport");
var board = new five.Board({
    port: new EtherPort(3030)
});

board.on("ready", function() {
    console.log('ready');

    var led = new five.Led(13);
    led.blink();
});

board.on("error", function(error) {
    console.log("error", error);
});

board.on("close", function() {
    console.log("board closed");
});