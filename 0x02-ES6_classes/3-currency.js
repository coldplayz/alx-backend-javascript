export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Implement getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Implement setters
  set code(c) {
    this._code = c;
  }

  set name(n) {
    this._name = n;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
