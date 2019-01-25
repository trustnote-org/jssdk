
const client = require("./lib/client");
const conf = require("./conf")
c = new client(conf.hub);

c.get_witnesses().then(function (result) {
     console.log(result);
     c.get_light_props(result, "7E5V7WKXWC4ZELYSRYSA3UO6K53SELYC").then(function (result) {
         console.log(result);
     });
});

c.get_balance("7E5V7WKXWC4ZELYSRYSA3UO6K53SELYC").then(function (result) {
     console.log(result);
});

c.get_peers().then(function (result) {
    console.log(result);
});
