import { northAmerica } from './archive-data.js';
import { Card } from './card.js';

class Game {
  constructor(){
    this.cityList = northAmerica;
    this.discard = [];
    this.infectionDeck = [];
    this.createInfectionDeck();
    this.playerDrawDeck = [];
    this.createPlayerDrawDeck();
    this.epidemicCardAmount = 4;
  }

  createInfectionDeck(){
    const infectedDeck = [];
    this.cityList.forEach(function(city) {
      infectedDeck.push(new Card(city));
    });
    this.infectionDeck = infectedDeck;
    return infectedDeck;
  }

  createPlayerDrawDeck(){
    const newPlayerDrawDeck = [];
    this.cityList.forEach(function(city) {
      newPlayerDrawDeck.push(new Card(city));
    });
    this.playerDrawDeck = newPlayerDrawDeck;
    return newPlayerDrawDeck;
  }

  flipInfectionCard () {

  }

  drawPlayerCard(){

  }

  shuffleDeck(){

  }

}

export { Game }
