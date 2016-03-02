var five = require("johnny-five");
var EtherPort = require("etherport");
var board = new five.Board({
    port: new EtherPort(3030)
});

var flagA = 1;

board.on("ready", function () {
    console.log('ready');
    var ledGreen = new five.Led(12);

    function fade() {
        if (flagA == 1) {
            console.log("fade in - start");
            ledGreen.fadeIn(10000, function () {
                flagA = 2;
                console.log("fade in - end");
                process.nextTick(fade)
            });
        }
        else {
            console.log("fade out - start");
            ledGreen.fadeOut(10000, function () {
                flagA = 1;
                console.log("fade out - end");
                process.nextTick(fade)
            });
        }
    }
    fade();
});