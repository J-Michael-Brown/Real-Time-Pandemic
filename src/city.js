import { commonDiseases } from './disease.js';

class City {
  constructor(name, connections = []) {
    this.name = name;
    this.diseases = commonDiseases;
    this.connections = connections; // array of cities connected;
    this.outbroke = false;
  }

  checkOutbreak() {
    this.diseases.foreach(function(disease) {
      if (disease.cubes >= 3){
        this.outbroke = true;
        disease.cubes = 3;
        this.outbreak(disease.codename);
        return this.name;
      }

    });
  }

  outbreak(codename){

    this.connections.foreach(function(city) {

      city.addCube(codename);
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
