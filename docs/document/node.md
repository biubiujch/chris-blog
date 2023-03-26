## 高阶函数

**函数接收的参数为函数，或者返回一个函数，叫做高阶函数**

- 应用场景  
  例如在一个原有的方法上扩展一些功能，以下是一个 before 方法的实现

```typescript
function core(a: any, b: any, c: any) {
  console.log("core");
}

Function.prototype.before = function (fn) {
  return (...args) => {
    fn();
    this(...args);
  };
};

const fn = core.before(() => {
  //balabala
  console.log("before");
});

fn(1, 2, 3);
```

## 设计模式

- **观察者模式**

- **发布订阅**

## promise 原理

- **promise 的基本使用**

```typescript
const promise = new Promise((resolve, reject) => {
  resolve("ok");
});
promise.then(
  (data) => {},
  (err) => {}
);
```

- **实现原理**

1. 每个 promise 有三个状态，pending ,fulfilled,rejected
2. 每个 promise 需要有一个 then 方法，传入两个参数，一个成功的回调，一个失败的回调。
3. new promise 会立即执行
4. 一旦成功就不能失败，反之则不能成功
5. 当 promise 抛出异常后会进入失败态

```typescript
enum STATUS {
  PADDING = "PADDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED"
}

class Promise {
  status: STATUS;
  data: undefined;
  reason: undefined;
  constructor(executor) {
    this.status = STATUS.PADDING;
    this.data = undefined;
    this.reason = undefined;
    const resolve = (data) => {
      if (this.status === STATUS.PADDING) {
        this.status = STATUS.FULFILLED;
        this.data = data;
      }
    };
    const reject = (reason) => {
      if (this.status === STATUS.PADDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === STATUS.FULFILLED) {
      onFulfilled(this.data);
    }
    if (this.status === STATUS.REJECTED) {
      onFulfilled(this.reason);
    }
  }
}
```

- **promise 是支持链式调用的**

  1. 无论成功还是失败，都可以返回结果。（1.出错了走失败的回调，2.返回一个普通值走成功的回调。3.返回 promise。用 promise 解析后的结果传递给下一个）

  ```javascript
  let promise = new Promise((resolve, reject) => {
    resolve("ok");
  }).then(
    (data) => {},
    (error) => {}
  );
  ```
