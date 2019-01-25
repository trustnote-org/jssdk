const WebSocket = require('ws');

function ws_do(conn, request, resolve, reject) {
    var ws = new WebSocket(conn);
    // 响应onmessage事件:
    ws.onmessage = function (evt) {
        var data = JSON.parse(evt.data);
        if (data[0] == "response") {
            return_json = data[1].response;
            resolve(return_json);
            ws.close();
        } else {
            //reject()
        }
    }
    ws.onopen = function () {
        ws.send(JSON.stringify(request));
    }
}

client = function (conn) {
    this.conn = conn
    this.get_witnesses = function () {
        var conn = this.conn;
        request = [
            "request",
            {
                "command": "get_witnesses",
                "tag": "1"
            }
        ]
        return new Promise(function (resolve, reject) {
            ws_do(conn, request, resolve, reject);
        });
    }
    this.get_light_props = function (witnesses, wallet_address) {
        var conn = this.conn;
        request = [
            "request",
            {
                "command": "light/get_parents_and_last_ball_and_witness_list_unit",
                "params":
                {
                    "wallet_address": wallet_address,
                    "witnesses": witnesses
                },
                "tag": "3"
            }
        ]
        return new Promise(function (resolve, reject) {
            ws_do(conn, request, resolve, reject);
        });
    }
    this.get_balance = function (wallet_address) {
        var conn = this.conn;
        request = [
            "request",
            {
                "command": "light/get_balance",
                "params":
                {
                    "addresses": [wallet_address],
                },
                "tag": "3"
            }
        ]
        return new Promise(function (resolve, reject) {
            ws_do(conn, request, resolve, reject);
        });
    }
    this.get_peers = function () {
        var conn = this.conn;
        request = [
            "request",
            {
                "command": "get_peers",
                "tag": "3"
            }
        ]
        return new Promise(function (resolve, reject) {
            ws_do(conn, request, resolve, reject);
        });
    }
}

module.exports = client;