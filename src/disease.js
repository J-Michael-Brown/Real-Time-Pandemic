class Disease {
  constructor(name) {
    this.codename = name;
    this.cubes = 0;
    this.cured = false;
    this.eradicated = false;
  }
}

const commonDiseases = [
  new Disease('red'),
  new Disease('blue'),
  new Disease('black'),
  new Disease('yellow')
];

export { Disease, commonDiseases }
