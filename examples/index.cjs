
const PromiseWithStatus = require("../dist/promise-with-status.min.js");

(async () => {

  const promises = [];

  promises.push(new PromiseWithStatus((resolve, reject) => {
    resolve(true);
  }));

  promises.push(new PromiseWithStatus((resolve, reject) => {
    setTimeout(() => { resolve(true); }, 100);
  }));

  console.log(promises.map(p => p.status));

  await Promise.all(promises.filter(p => p.status == "pending"));

  console.log(promises.map(p => p.status));

})();
