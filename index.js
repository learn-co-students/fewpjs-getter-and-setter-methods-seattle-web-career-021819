// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return this.radius * this.radius * Math.PI;
  }

  set diameter(diameter) {
    this.radius = parseInt(diameter) / 2;
  }

  set circumference(circumference) {
    this.radius = parseInt(circumference) / (2 * Math.PI);
  }

  set area(area) {
    this._area = area;
  }
}
