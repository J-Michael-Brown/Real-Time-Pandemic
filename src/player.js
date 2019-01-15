
class Player {
  constructor(name){
    this.cardHand = [];
    this.name = name;
    this.handLimit = 7;
    this.playerRole = "";
  }

  discard(cityName){
    let hand = this.cardHand;
    for (let currentCardIndex = 0 ; currentCardIndex < hand.length ; currentCardIndex++) {
      if (hand[currentCardIndex].cityName == cityName){
        const card = this.cardHand.splice(currentCardIndex, 1)[0];
        return card;
      }
    }
  }
}

const testPlayers = [
  new Player('Joe'),
  new Player('Michael'),
  new Player('Charley')
];

export { testPlayers, Player }
