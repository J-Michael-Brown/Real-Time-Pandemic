import { City } from './../src/city.js';
import { Game } from './../src/game.js';
import { Card } from './../src/card.js';

describe('Game', function() {
  let newGame;
  beforeEach(function() {
    newGame = new Game();
  });

  describe('createInfectionDeck',function() {
    it('instantiates game with a deck of infection cards', function(){
      let newCard = new Card(newGame.cityList[0]);
      expect(newGame.infectionDeck[0]).toEqual(newCard);
    });
  });

  describe('createPlayerDrawDeck', function() {
    it('instantiates game with a deck of player draw cards', function() {
      let newCard = new Card(newGame.cityList[1]);
      expect(newGame.playerDrawDeck[1]).toEqual(newCard);
    });
  });

});
