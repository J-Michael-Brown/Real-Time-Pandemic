import { City } from './../src/city.js';
import { Game } from './../src/game.js';
import { Card } from './../src/card.js';

describe('Game', function() {
  let newGame;
  beforeEach(function() {
    newGame = new Game();
  });

  describe('findCity', function() {
    it('should return a city object given it\'s name.', function() {
      const testCity = newGame.cityList[0];
      expect(newGame.findCity(testCity.name)).toEqual(testCity);
    });
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

  describe('resolveOutbreaks', function() {
    it("should set all cities' diseases to outbroke:false and return the number of outbreaks that had to be swithched.", function() {
      newGame.cityList[0].outbreak('red');
      newGame.cityList[1].outbreak('blue');
      newGame.cityList[2].outbreak('red');
      const outbreaks = newGame.resolveOutbreaks();
      expect(outbreaks).toEqual(3);
      expect(newGame.cityList[0].findDisease('red').outbroke).toEqual(false);
    });
  });

});
