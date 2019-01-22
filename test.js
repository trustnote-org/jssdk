
const client = require('./lib/client');
const conn = "ws://dev.trustnote.org:6616";

c = new client(conn);

c.get_witnesses().then(function (result) {
    //console.log(result);
    c.get_light_props(result, "7E5V7WKXWC4ZELYSRYSA3UO6K53SELYC").then(function (result) {
        console.log(result);
    });
});
