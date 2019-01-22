### install
```
npm install
```

### 初始化钱包 

```
node init.js
```

### 显示钱包信息

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
const conn = "ws://www.tsdn.xyz:6616";
c = new client(conn);
```

3. 获得 light props

```
c.get_witnesses().then(function (result) {
    //console.log(result);
    c.get_light_props(result, "7E5V7WKXWC4ZELYSRYSA3UO6K53SELYC").then(function (result) {
        console.log(result);
    });
});
```

### 未完

> 其余的功能会陆续添加。