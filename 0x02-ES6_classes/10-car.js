export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cl = new this.constructor();
    Object.assign(cl, this);
    return cl;
  }
}
