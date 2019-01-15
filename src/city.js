import { Disease } from './disease.js';

class City {
  constructor(name, diseaseCodename = "", connections = []) {
    this.name = name;
    this.connections = connections; // array of cities connected;
    this.defaultDiseaseCodename = diseaseCodename;
    this.createDiseases();
  }

  createDiseases() {
    this.diseases = [
      new Disease('red'),
      new Disease('blue'),
      new Disease('black'),
      new Disease('yellow')
    ];
  }

  checkOutbreak() {
    const breaches = [];
    let thisCity = this;
    this.diseases.forEach(function(disease) {
      if (disease.cubes > 3){
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
    this.diseases[this.findDiseaseIndex(codename)].outbroke = true;
    this.connections.forEach(function(city) {
      if (!city.findDisease(codename).outbroke) {
        city.addCube(codename);
        city.checkOutbreak();
      }
    });

  }

  addCube(codename, numberOfCubes = 1) {
    const length = this.diseases.length;
    for(let diseaseIndex = 0; diseaseIndex < length; diseaseIndex++) {
      if ((this.diseases[diseaseIndex].codename == codename)&&(this.diseases[diseaseIndex].eradicated == false)) {
        this.diseases[diseaseIndex].cubes+=numberOfCubes;
        if (this.diseases[diseaseIndex].cubes < 0) {
          this.diseases[diseaseIndex].cubes = 0;
        }
        return numberOfCubes;
      }
    }
    numberOfCubes = 0;
    return numberOfCubes;
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

  findDiseaseIndex(codename) {
    const length = this.diseases.length;
    for(let diseaseIndex = 0; diseaseIndex < length; diseaseIndex++) {
      if (this.diseases[diseaseIndex].codename == codename) {
        return diseaseIndex;
      }
    }
    return false;
  }
}

export { City }
