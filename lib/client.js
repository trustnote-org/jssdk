const WebSocket = require('ws');
client = function (conn){
    this.conn = conn
    this.get_witnesses=function () {
        return new Promise(function (resolve, reject) {
            var ws = new WebSocket(conn);
            ws.onopen = function () {
                // 使用 send() 方法发送数据
                //justsaying = ["justsaying", { "body": { "alt": "1", "library": "rust-sdag", "library_version": "0.1.0", "program": "rust-sdag-hub", "program_version": "0.1.0", "protocol_version": "1.0" }, "subject": "version" }]
                //subscribe = ["request", { "command": "subscribe", "params": { "last_mci": 2240, "subscription_id": "eFOOhr5skG5pcCZuNOiMuBjLyZAt9Dxyrp2TzqSc" }, "tag": "0" }]
                request = [
                    "request",
                    {
                        "command": "get_witnesses",
                        "tag": "1"
                    }
                ]
                // 响应onmessage事件:
                ws.onmessage = function (evt) {
                    var data = JSON.parse(evt.data);
                    if (data[0] == "response") {
                        return_json = data[1].response;
                        resolve(return_json);
                        ws.close();
                    }else{
                        //reject()
                    }
                    
                }
                ws.send(JSON.stringify(request));
            }
        });
    }
    this.get_light_props=function (witnesses, wallet_address) {
        return new Promise(function (resolve, reject) {
            var ws = new WebSocket(conn);
            ws.onopen = function () {
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
                ws.onmessage = function (evt) {
                    var data = JSON.parse(evt.data);
                    if (data[0] == "response") {
                        return_json = data[1].response;
                        resolve(return_json);
                        ws.close();
                    }else{
                        //reject()
                    }
                    
                    //console.log("data:", evt.data);
                }
                ws.send(JSON.stringify(request));
            }
        });
    }
}

module.exports = client;