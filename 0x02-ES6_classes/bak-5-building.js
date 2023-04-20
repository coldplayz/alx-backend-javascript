export default class Building {
  constructor(sqft) {
    if (this.constructor.name !== 'Building' && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage && typeof this.evacuationWarningMessage === 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sf) {
    this._sqft = sf;
  }
}
