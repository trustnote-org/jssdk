"use strict";
var chash = require('./chash.js');

function isStringOfLength(str, len) {
    return (typeof str === "string" && str.length === len);
}

function isValidChash(str, len) {
    return (isStringOfLength(str, len) && chash.isChashValid(str));
}

function isValidAddress(address) {
    try {
        if ((typeof address === "string" && address === address.toUpperCase() && isValidChash(address, 32))) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

exports.isValidAddress = isValidAddress;