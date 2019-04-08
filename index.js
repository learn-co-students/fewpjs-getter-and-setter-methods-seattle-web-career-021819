class Circle {
  constructor (radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return (Math.PI * this.diameter);
  }

  get area() {
    return (Math.PI * Math.pow(this.radius, 2));
  }

  set diameter(dd) {
    this.radius = dd / 2;
  }

  set circumference(cc) {
    this.radius = cc / Math.PI / 2;
  }

  set area(aa) {
    this.radius = Math.sqrt(aa) / Math.PI;
  }


}
