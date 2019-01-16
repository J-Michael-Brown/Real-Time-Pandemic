import { Game } from './game.js';

class GameUi extends Game{

  setupGameBoard() {
    for (var infectionStrengthIndex = 3; infectionStrengthIndex >= 1; infectionStrengthIndex--) {
      for (var drawInfectionCardsIndex = 1; drawInfectionCardsIndex <= 1; drawInfectionCardsIndex++) {
        this.flipInfectionCard(infectionStrengthIndex);
      }
    }
    const players = this.playerList.length;
    let drawNumber = 0;
    if(players >= 4) {
      drawNumber = 2
    } else if (players ==3 ) {
      drawNumber = 3;
    } else {
      drawNumber = 4;
    }
    this.playerList.forEach((player) =>{
      for(let i = 0; i < drawNumber; i++) {
        this.drawPlayerCard(player.name);
      }
    });
  }

  gameStats() {
    this.cityList.forEach(function(city) {
      console.log(`${city.name}'s infections:`);
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
 export { GameUi }
