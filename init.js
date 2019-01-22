//载入核心库
let Client = require("./lib/base");
//载入本地存储库
var nStore = require('nstore');
nStore = nStore.extend(require('nstore/query')());

//生成助记词
let mnemonic = Client.mnemonic();
//生成私钥
let private_key = Client.xPrivKey(mnemonic);
//生成公钥
let public_key = Client.xPubKey(private_key);
//生成钱包公钥
let wallet_public_key = Client.walletPubKey(public_key, 0);
//生成钱包地址
let address = Client.walletAddress(wallet_public_key, 0, 0);

let wallet = {
    mnemonic: mnemonic,
    private_key: private_key,
    public_key: public_key,
    wallet_public_key: wallet_public_key,
    address: address
}

console.log("wallet:", wallet);

var db = nStore.new("key.db", function () {
    db.save("key", wallet , function (err) {
        if (err) { throw err; }
    });
});
