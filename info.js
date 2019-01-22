var nStore = require('nstore');
nStore = nStore.extend(require('nstore/query')());
var db = nStore.new("key.db", function () {
    db.get("key", function (err, doc, key) {
        console.log(doc);
    });
});