### install
```
npm install
```

### 初始化钱包 

```
node init.js
```

### 导入钱包

```
node import.js "guitar lion flush metal winner must saddle joy sauce logic pear layer"
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
nano conf.js
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
