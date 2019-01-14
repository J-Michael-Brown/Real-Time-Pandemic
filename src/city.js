import { commonDiseases } from './disease.js';

class City {
  constructor(name, connections = []) {
    this.name = name;
    this.diseases = commonDiseases;
    this.connections = connections; // array of cities connected;

  }

  checkOutbreak() {
    const breaches = [];
    let thisCity = this;
    this.diseases.forEach(function(disease) {
      if (disease.cubes >= 3){
        disease.outbroke = true;
        disease.cubes = 3;
        breaches.push(disease.codename);
        thisCity.outbreak(disease.codename);
      }
    });
    // this = thisCity;
    return breaches;
  }

  outbreak(codename){
    this.connections.forEach(function(city) {
      if (!city.findDisease(codename).outbroke) {
        city.addCube(codename);
        city.checkOutbreak;
      }
    });

  }

  addCube(codename, numberOfCubes = 1) {
    const length = this.diseases.length;
    for(let diseaseIndex = 0; diseaseIndex < length; diseaseIndex++) {
      if (this.diseases[diseaseIndex].codename == codename) {
        this.diseases[diseaseIndex].cubes+=numberOfCubes;
      }
    }
  }

  findDisease(codename) {
    const length = this.diseases.length;
    for(let diseaseIndex = 0; diseaseIndex < length; diseaseIndex++) {
      if (this.diseases[diseaseIndex].codename == codename) {
        return this.diseases[diseaseIndex];
      }
    }
    return false;
  }
}

export { City }
