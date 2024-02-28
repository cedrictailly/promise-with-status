
export default class PromiseWithStatus extends Promise<any> {
  status: "pending" | "fulfilled" | "rejected";
  promise: Promise<any>;
}
