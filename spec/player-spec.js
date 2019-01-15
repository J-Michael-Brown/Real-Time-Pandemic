import { Card } from './../src/card.js';
import { Player } from './../src/player.js';
import { northAmerica } from './../src/archive-data.js';

describe('Player', function() {
  let charley;
  let atlanta;
  let newYork;
  beforeEach(function() {
    charley = new Player('Charley');
    atlanta = northAmerica[0];
    newYork = northAmerica[5];
    charley.cardHand.push(new Card(atlanta));
    charley.cardHand.push(new Card(newYork));
  });

  describe('discard', function() {
    it('should remove a chosen card from the players hand, and return that card object.', function() {
      let discardedCard = charley.discard('Atlanta');
      expect(charley.cardHand.length).toEqual(1);
      expect(discardedCard).toEqual(new Card(atlanta));
      expect(charley.cardHand).toContain(new Card(newYork));
    });
  });

});
