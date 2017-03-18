import Place from './place'

export default class City {
  constructor(data) {
    this._data = data;
    this._places = this._data.children.map(p => new Place(p, this));
  }

  get name() {
    return this._data.name;
  }

  get places() {
    return this._places;
  }

  get coordinates() {
    return this._data.coordinates
  }
}
