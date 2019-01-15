import { City } from './../src/city.js';
import { Game } from './../src/game.js';
import { Card } from './../src/card.js';
import { Player } from './../src/player.js';

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

  describe('resolveOutbreaks', function(){
    it('should set all disease.outbroke = false, and return the total number of outbreaks resovled', function() {
      newGame.cityList[0].addCube('red',4);
      newGame.cityList[0].checkOutbreak();
      let result = newGame.resolveOutbreaks();
      expect(result).toEqual(1);
      result = newGame.resolveOutbreaks();
      expect(result).toEqual(0);
    });
  });

  describe('flipInfectionCard', function() {
    it('should "flip" an infection card, add the appropriate disease cube, check for outbreaks, and then add the discard to the graveyard deck', function() {
      let cardInPlay = newGame.flipInfectionCard();
      expect(newGame.infectionDiscardDeck[0].cityName).toEqual(cardInPlay.cityName);
    });
  });

  describe('drawPlayerCard', function(){
    it('should draw a play card to the players hand', function(){
      let currentPlayer = newGame.findPlayer('Joe');
      let cardInPlay = newGame.drawPlayerCard('Joe');
      expect(currentPlayer.cardHand).toContain(cardInPlay);
    })
  })

  describe('findPlayer', function() {
    it('takes a player name and returns a the associated player object', function() {

      const joe = newGame.findPlayer('Joe');
      expect(new Player('Joe').name).toEqual(joe.name);
      expect(new Player('Joe').role).toEqual(joe.role);
    });
  });

});
