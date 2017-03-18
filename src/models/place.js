export default class Place {
  constructor(data, parent) {
    this._data = data;
    this._city = parent;
  }

  get coordinates() {
    return this._data.coordinates
  }

  get image() {
    return this._data.image;
  }

  get name() {
    return this._data.name;
  }

  get id() {
    return this._data.id;
  }

  get city() {
    this._city;
  }

  get social() {
    return this._data.social;
  }

  get description() {
    return this._data.description;
  }

  get address() {
    return this._data.address;
  }

  get lat() {
    return this.coordinates.lat;
  }

  get lng() {
    return this.coordinates.lng;
  }

  get postalCode() {
    return this._data.postal_code;
  }

  get phone() {
    return this._data.phone;
  }

  get city() {
    return this._data.city;
  }

  get toParams() {
    return { place: this.name, city: this._city.name }
  }
}
