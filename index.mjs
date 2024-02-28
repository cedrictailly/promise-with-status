
export default class PromiseWithStatus {

  #status = "pending";
  #promise = null;

  get status()  { return this.#status; }
  get promise() { return this.#promise; }

  constructor(callback) {

    this.#promise = new Promise((resolve, reject) => {
      callback(
        (...args) => { this.#status = "fulfilled"; resolve(...args); },
        (...args) => { this.#status = "rejected";  reject(...args);  },
      );
    });
  }

  then(...args)    { return this.#promise.then(...args); }
  catch(...args)   { return this.#promise.catch(...args); }
  finally(...args) { return this.#promise.finally(...args); }
}
