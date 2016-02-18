var Firmata = require("firmata").Board;
var EtherPort = require("etherport");
var board = new Firmata(new EtherPort(3030));

board.on("ready", function() {
    console.log("ready");

    var state = 1;
    this.pinMode(8, this.MODES.OUTPUT);

    setInterval(function() {
        this.digitalWrite(42, (state ^= 1));
    }.bind(this), 500);
});

board.on("error", function(error) {
    console.log("error", error);
});

board.on("close", function() {
    console.log("board closed");
});