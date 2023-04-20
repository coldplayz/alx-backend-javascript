import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Implement getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Implement setters
  set amount(amt) {
    this._amount = amt;
  }

  set currency(cur) {
    this._currency = cur;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
