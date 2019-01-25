//载入本地存储库
var nStore = require('nstore');
nStore = nStore.extend(require('nstore/query')());
var Mnemonic = require('bitcore-mnemonic');
var Bitcore = require('bitcore-lib');
var ecdsa = require('secp256k1');
var objectHash = require('./lib/object_hash.js');

// 导入助记词
var text = process.argv[2];
var mnemonic = new Mnemonic(text);
// 生成HD钱包私钥
var xPrivKey = mnemonic.toHDPrivateKey();
// 生成HD钱包公钥，account=0
var xPubKey = Bitcore.HDPublicKey(xPrivKey.derive("m/44'/0'/0'"));
// 生成设备私钥，用于产生设备地址
var devicePrivKey = xPrivKey.derive("m/1'");
// 获取设备公钥
var pubkey = ecdsa.publicKeyCreate(devicePrivKey.privateKey.bn.toBuffer({ size: 32 }), true).toString('base64');
// 生成设备地址
var device_address = '0' + objectHash.getChash160(pubkey);
var pubkey = xPubKey.derive('m/0/0').publicKey.toBuffer().toString('base64');
// 设定地址定义脚本，为单签名
var arrDefinition = ["sig", { "pubkey": pubkey }];
// 生成地址
var address = objectHash.getChash160(arrDefinition);
var wallet = {
    mnemonic: mnemonic.phrase,
    xPrivKey: xPrivKey.toString(),
    xPubKey: xPubKey.toString(),
    address: address
};
console.log("wallet:", wallet);
var db = nStore.new("key.db", function () {
    db.save("key", wallet, function (err) {
        if (err) { throw err; }
    });
});