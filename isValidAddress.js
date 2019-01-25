const isValidAddress = require("./lib/validation");
var address = process.argv[2];
console.log(isValidAddress.isValidAddress(address));