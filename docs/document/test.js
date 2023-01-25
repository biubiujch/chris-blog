let promise = new Promise((resolve, reject) => {
  reject(1);
}).then(
  (data) => {
    throw new Error("aaa");
  },
  (err) => {
    return 1;
  }
);

promise.then(
  (data) => {
    console.log(data, "success");
  },
  (err) => {
    console.log(err);
  }
);
