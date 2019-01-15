import { Game } from './game.js';

default class Game {

  function setupGameBoard() {
    for (var infectionStrengthIndex = 3; infectionStrengthIndex >= 1; infectionStrengthIndex--) {
      for (var drawInfectionCardsIndex = 1; drawInfectionCardsIndex <= 1; drawInfectionCardsIndex++) {
        this.flipInfectionCard(infectionStrengthIndex);
      }
    }
  }

  function gameStats() {
    this.cityList.forEach(function(city) {
      console.log(`${city.name}'s infections:'`);
      city.diseases.forEach(function(disease) {
        if(disease.cubes>0){
          console.log(`   ${disease.codename}: ${disease.cubes}`);
        }
      });
    });
    this.playerList.forEach(function(player) {
      console.log(`${player.name}'s hand:'`);
      player.cardHand.forEach(function(card) {
        console.log(`   ${card.cityName}: ${card.diseaseCodename}`);
      });
    });
  }

  }

}

export { Game }
