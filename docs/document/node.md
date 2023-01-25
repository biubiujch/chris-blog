## promise

1. 每个 promise 有三个状态，pending ,fulfilled,rejected,
2. 每个 promise 需要有一个 then 方法，传入两个参数，一个成功的回调，一个失败的回调
3. new promise 会立即执行
4. 一旦成功就不能失败，反之则不能成功
5. 当 promise 抛出异常后会进入失败态

- promise 是支持链式调用的

  1. 无论成功还是塞拜，都可以返回结果。（1.出错了走失败的回调，2.返回一个普通值走陈工的回调。3.返回 promise。用 promise 解析后的结果传递给下一个）

  ```javascript
  let promise = new Promise((resolve, reject) => {
    resolve("ok");
  }).then(
    (data) => {},
    (error) => {}
  );
  ```

### 参考 promise A+规范
