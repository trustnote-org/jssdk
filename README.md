### install
```
npm install
```

### 钱包用法

1. 初始化钱包（生成助记词、私钥、公钥、地址）

```
node init.js
```

2. 显示钱包信息

```
node info.js
```

### hub 用法

1. 引用client

```
const client = require('./lib/client');
```

2. 设置hub地址

```
const conn = "ws://dev.trustnote.org:6616";
```

3. 设置client对象

```
c = new client(conn);
```

### hub示例
1. 获得 witnesses

```
c.get_witnesses().then(function (result) {
    console.log(result);
});
```

2. 获得 light props

```
c.get_witnesses().then(function (result) {
    //console.log(result);
    c.get_light_props(result, "7E5V7WKXWC4ZELYSRYSA3UO6K53SELYC").then(function (result) {
        console.log(result);
    });
});
```

### 其他功能未完待续

> 其余的功能会陆续添加。