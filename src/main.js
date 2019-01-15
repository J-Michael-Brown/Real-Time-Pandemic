import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game-ui-logic.js';
import { Player } from './player.js';


$(document).ready(function() {
  let player1 = new Player('Michael');
  let player2 = new Player('Charley');
  let newGame = new Game([ player1, player2 ]);

});
