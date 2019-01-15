import { City } from './../src/city.js';
import { Game } from './../src/game.js';
import { Card } from './../src/card.js';
import { Player } from './../src/player.js';
import { Disease } from './../src/disease.js';

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

  describe('findPlayerIndex', function() {
    it('takes a player name and returns a the associated player index from the player list', function() {
      const joe = newGame.findPlayerIndex('Joe');
      expect(joe).toEqual(0);
    });
  });

  describe('discardPlayerCard', function() {
    it('removes a chosen card from chosen players hand, and adds it to the discard deck', function() {
      let resultCard = newGame.drawPlayerCard('Joe');
      let discardedCard = newGame.discardPlayerCard('Joe', resultCard.cityName);
      expect(discardedCard).toEqual(resultCard);
      expect(newGame.playerDiscardDeck).toContain(resultCard);
    });
  });

  describe('cure()', function() {
    it('sets all cities\' diseases of a specified codename to cured:true', function() {
      const newDisease = new Disease('veronica virus');
      const racoon = new City('Racoon', 'veronica virus', [], [newDisease]);
      newGame.diseaseList.push(newDisease);
      expect(newGame.findDisease('veronica virus').cured).toEqual(false);
      newGame.cure('veronica virus');
      expect(newGame.findDisease('veronica virus').cured).toEqual(true);
    });
  });

  describe('eradicate()', function() {
    it('sets all cities\' diseases of a specified codename to eradicated:true', function() {
      const newDisease = new Disease('veronica virus');
      const racoon = new City('Racoon', 'veronica virus', [], [newDisease]);
      newGame.diseaseList.push(newDisease);
      expect(newGame.findDisease('veronica virus').eradicated).toEqual(false);
      newGame.eradicate('veronica virus');
      expect(newGame.findDisease('veronica virus').eradicated).toEqual(true);
    });
  });

});
