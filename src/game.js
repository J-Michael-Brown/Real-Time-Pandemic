import { northAmerica } from './archive-data.js';
import { Card } from './card.js';
import { testPlayers } from './player.js';

class Game {
  constructor(playerList = testPlayers){
    this.cityList = northAmerica;
    this.playerList = playerList;
    //this.discard = [];
    this.infectionDeck = [];
    this.createInfectionDeck();
    this.playerDrawDeck = [];
    this.createPlayerDrawDeck();
    this.epidemicCardAmount = 4;
    this.playerDiscardDeck = [];
    this.infectionDiscardDeck = [];
    this.diseaseList = this.playerList[0].diseases;
  }

  resolveOutbreaks() {
    let numberOfOutbreaks = 0;
    this.cityList.forEach(function(city) {
      city.diseases.forEach(function(disease){
        if(disease.outbroke){
          disease.outbroke = false;
          numberOfOutbreaks++;
        }
      });
    });
    return numberOfOutbreaks;
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

  findCity(cityName){
    let targetCity = false;
    this.cityList.forEach(function(city){
      if (cityName == city.name){
        targetCity = city;
      }
    });
    return targetCity;
  }

  flipInfectionCard () {
    let cardInPlay = this.infectionDeck.pop();
    let city = this.findCity(cardInPlay.cityName);
    city.addCube(cardInPlay.diseaseCodename);
    city.checkOutbreak(cardInPlay.diseaseCodename);
    this.infectionDiscardDeck.push(cardInPlay);
    return cardInPlay;
  }

  drawPlayerCard(playerName) {
    let cardInPlay = this.playerDrawDeck.pop();
    let currentPlayer = this.findPlayer(playerName);
    currentPlayer.cardHand.push(cardInPlay);
    let city = this.findCity(cardInPlay.cityName);
    return cardInPlay;
  }

  discardPlayerCard(playerName,discardedCardCityName) {
    let discardedCard = this.playerList[this.findPlayerIndex(playerName)].discard(discardedCardCityName);
    this.playerDiscardDeck.push(discardedCard);
    return discardedCard;

  }

  shuffleDeck() {

  }

  findPlayer(name) {
    for (let playerIndex = 0; playerIndex < this.playerList.length; playerIndex++) {
      if (this.playerList[playerIndex].name == name) {
        return this.playerList[playerIndex];
      }
    }
    return false;
  }

  findPlayerIndex(playerName) {
    for (let playerIndex = 0; playerIndex < this.playerList.length; playerIndex++) {
      if (this.playerList[playerIndex].name == playerName) {
        return playerIndex;
      }
    }
    return false;
  }

}

export { Game }
