import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GameUi } from './game-ui-logic.js';
import { Player } from './player.js';


function createGame(){
  let player1 = new Player('Michael');
  let player2 = new Player('Charley');
  let newGame = new GameUi([ player1, player2 ]);
  newGame.gameStats();
  debugger;
}
$(document).ready(function() {
  createGame();
});
