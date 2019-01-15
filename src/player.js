
class Player {
  constructor(name){
    this.cardHand = [];
    this.name = name;
    this.handLimit = 7;
    this.playerRole = "";
  }
}

const averagePlayers = [
  new Player('Joe'),
  new Player('Michael'),
  new Player('Charley')
];

export { averagePlayers, Player }
