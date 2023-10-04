class MyHashMap {
  constructor() {
    this.data = new Array(1000000); // new Array(1000) is also ok and memory iffecient
  }

  put(key, val) {
    this.data[key] = val;
  }
  get(key) {
    return this.data[key] === undefined ? -1 : this.data[key];
  }
  remove(key) {
    this.data[key] = undefined;
  }
}
