import { Component } from '@angular/core';
import { Players } from '../typeDefs';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {

    faChessPawn = faChessPawn;

    gridColor = [
      {row: 0, col: 0, color: 'bg-red-400'},
      {row: 0, col: 1, color: 'bg-red-400'},
      {row: 0, col: 2, color: 'bg-red-400'},
      {row: 0, col: 3, color: 'bg-red-400'},
      {row: 0, col: 4, color: 'bg-red-400'},
      {row: 1, col: 0, color: 'bg-red-400'},
      {row: 1, col: 1, color: 'bg-red-400'},
      {row: 1, col: 2, color: 'bg-red-400'},
      {row: 1, col: 3, color: 'bg-red-400'},
      {row: 1, col: 4, color: 'bg-red-400'},
      {row: 2, col: 0, color: 'bg-red-400'},
      {row: 2, col: 1, color: 'bg-red-400'},
      {row: 2, col: 2, color: 'bg-red-400'},
      {row: 2, col: 3, color: 'bg-red-400'},
      {row: 2, col: 4, color: 'bg-red-400'},
      {row: 3, col: 0, color: 'bg-red-400'},
      {row: 3, col: 1, color: 'bg-red-400'},
      {row: 3, col: 2, color: 'bg-red-400'},
      {row: 3, col: 3, color: 'bg-red-400'},
      {row: 3, col: 4, color: 'bg-red-400'},
      {row: 4, col: 0, color: 'bg-red-400'},
      {row: 4, col: 1, color: 'bg-red-400'},
      {row: 4, col: 2, color: 'bg-red-400'},
      {row: 4, col: 3, color: 'bg-red-400'},
      {row: 4, col: 4, color: 'bg-red-400'},

      {row: 8, col: 0, color: 'bg-green-400'},
      {row: 8, col: 1, color: 'bg-green-400'},
      {row: 8, col: 2, color: 'bg-green-400'},
      {row: 8, col: 3, color: 'bg-green-400'},
      {row: 8, col: 4, color: 'bg-green-400'},
      {row: 9, col: 0, color: 'bg-green-400'},
      {row: 9, col: 1, color: 'bg-green-400'},
      {row: 9, col: 2, color: 'bg-green-400'},
      {row: 9, col: 3, color: 'bg-green-400'},
      {row: 9, col: 4, color: 'bg-green-400'},
      {row: 10, col: 0, color: 'bg-green-400'},
      {row: 10, col: 1, color: 'bg-green-400'},
      {row: 10, col: 2, color: 'bg-green-400'},
      {row: 10, col: 3, color: 'bg-green-400'},
      {row: 10, col: 4, color: 'bg-green-400'},
      {row: 11, col: 0, color: 'bg-green-400'},
      {row: 11, col: 1, color: 'bg-green-400'},
      {row: 11, col: 2, color: 'bg-green-400'},
      {row: 11, col: 3, color: 'bg-green-400'},
      {row: 11, col: 4, color: 'bg-green-400'},
      {row: 12, col: 0, color: 'bg-green-400'},
      {row: 12, col: 1, color: 'bg-green-400'},
      {row: 12, col: 2, color: 'bg-green-400'},
      {row: 12, col: 3, color: 'bg-green-400'},
      {row: 12, col: 4, color: 'bg-green-400'},

      {row: 0, col: 8, color: 'bg-blue-400'},
      {row: 0, col: 9, color: 'bg-blue-400'},
      {row: 0, col: 10, color: 'bg-blue-400'},
      {row: 0, col: 11, color: 'bg-blue-400'},
      {row: 0, col: 12, color: 'bg-blue-400'},
      {row: 1, col: 8, color: 'bg-blue-400'},
      {row: 1, col: 9, color: 'bg-blue-400'},
      {row: 1, col: 10, color: 'bg-blue-400'},
      {row: 1, col: 11, color: 'bg-blue-400'},
      {row: 1, col: 12, color: 'bg-blue-400'},
      {row: 2, col: 8, color: 'bg-blue-400'},
      {row: 2, col: 9, color: 'bg-blue-400'},
      {row: 2, col: 10, color: 'bg-blue-400'},
      {row: 2, col: 11, color: 'bg-blue-400'},
      {row: 2, col: 12, color: 'bg-blue-400'},
      {row: 3, col: 8, color: 'bg-blue-400'},
      {row: 3, col: 9, color: 'bg-blue-400'},
      {row: 3, col: 10, color: 'bg-blue-400'},
      {row: 3, col: 11, color: 'bg-blue-400'},
      {row: 3, col: 12, color: 'bg-blue-400'},
      {row: 4, col: 8, color: 'bg-blue-400'},
      {row: 4, col: 9, color: 'bg-blue-400'},
      {row: 4, col: 10, color: 'bg-blue-400'},
      {row: 4, col: 11, color: 'bg-blue-400'},
      {row: 4, col: 12, color: 'bg-blue-400'},

      {row: 8, col: 8, color: 'bg-yellow-400'},
      {row: 8, col: 9, color: 'bg-yellow-400'},
      {row: 8, col: 10, color: 'bg-yellow-400'},
      {row: 8, col: 11, color: 'bg-yellow-400'},
      {row: 8, col: 12, color: 'bg-yellow-400'},
      {row: 9, col: 8, color: 'bg-yellow-400'},
      {row: 9, col: 9, color: 'bg-yellow-400'},
      {row: 9, col: 10, color: 'bg-yellow-400'},
      {row: 9, col: 11, color: 'bg-yellow-400'},
      {row: 9, col: 12, color: 'bg-yellow-400'},
      {row: 10, col: 8, color: 'bg-yellow-400'},
      {row: 10, col: 9, color: 'bg-yellow-400'},
      {row: 10, col: 10, color: 'bg-yellow-400'},
      {row: 10, col: 11, color: 'bg-yellow-400'},
      {row: 10, col: 12, color: 'bg-yellow-400'},
      {row: 11, col: 8, color: 'bg-yellow-400'},
      {row: 11, col: 9, color: 'bg-yellow-400'},
      {row: 11, col: 10, color: 'bg-yellow-400'},
      {row: 11, col: 11, color: 'bg-yellow-400'},
      {row: 11, col: 12, color: 'bg-yellow-400'},
      {row: 12, col: 8, color: 'bg-yellow-400'},
      {row: 12, col: 9, color: 'bg-yellow-400'},
      {row: 12, col: 10, color: 'bg-yellow-400'},
      {row: 12, col: 11, color: 'bg-yellow-400'},
      {row: 12, col: 12, color: 'bg-yellow-400'},

      {row: 6, col: 1, color: 'bg-gray-400'},
      {row: 6, col: 2, color: 'bg-gray-400'},
      {row: 6, col: 3, color: 'bg-gray-400'},
      {row: 6, col: 4, color: 'bg-gray-400'},
      {row: 6, col: 5, color: 'bg-gray-400'},
      {row: 6, col: 6, color: 'bg-gray-400'},
      {row: 6, col: 7, color: 'bg-gray-400'},
      {row: 6, col: 8, color: 'bg-gray-400'},
      {row: 6, col: 9, color: 'bg-gray-400'},
      {row: 6, col: 10, color: 'bg-gray-400'},
      {row: 6, col: 11, color: 'bg-gray-400'},
      {row: 1, col: 6, color: 'bg-gray-400'},
      {row: 2, col: 6, color: 'bg-gray-400'},
      {row: 3, col: 6, color: 'bg-gray-400'},
      {row: 4, col: 6, color: 'bg-gray-400'},
      {row: 5, col: 6, color: 'bg-gray-400'},
      {row: 7, col: 6, color: 'bg-gray-400'},
      {row: 8, col: 6, color: 'bg-gray-400'},
      {row: 9, col: 6, color: 'bg-gray-400'},
      {row: 10, col: 6, color: 'bg-gray-400'},
      {row: 11, col: 6, color: 'bg-gray-400'}
    ]

    path = [
      {row: 12, col: 5},
      {row: 11, col: 5},
      {row: 10, col: 5},
      {row: 9, col: 5},
      {row: 8, col: 5},
      {row: 7, col: 5},
      {row: 7, col: 4},
      {row: 7, col: 3},
      {row: 7, col: 2},
      {row: 7, col: 1},
      {row: 7, col: 0},
      {row: 6, col: 0},
      {row: 5, col: 0},
      {row: 5, col: 1},
      {row: 5, col: 2},
      {row: 5, col: 3},
      {row: 5, col: 4},
      {row: 5, col: 5},
      {row: 4, col: 5},
      {row: 3, col: 5},
      {row: 2, col: 5},
      {row: 1, col: 5},
      {row: 0, col: 5},
      {row: 0, col: 6},
      {row: 0, col: 7},
      {row: 1, col: 7},
      {row: 2, col: 7},
      {row: 3, col: 7},
      {row: 4, col: 7},
      {row: 5, col: 7},
      {row: 5, col: 8},
      {row: 5, col: 9},
      {row: 5, col: 10},
      {row: 5, col: 11},
      {row: 5, col: 12},
      {row: 6, col: 12},
      {row: 7, col: 12},
      {row: 7, col: 11},
      {row: 7, col: 10},
      {row: 7, col: 9},
      {row: 7, col: 8},
      {row: 7, col: 7},
      {row: 8, col: 7},
      {row: 9, col: 7},
      {row: 10, col: 7},
      {row: 11, col: 7},
      {row: 12, col: 7},
      {row: 12, col: 6},
      {row: 12, col: 5}
    ]

    count = [0,0,0,0];

    winner = "";

    currentPlayerIndex = 0;

    startingPosition = [
      {row: 12, col: 5},
      {row: 5, col: 0},
      {row: 0, col: 7},
      {row: 7, col: 12}
    ]

    players : Players[]  = [
      { name: "Player 1", dice: 0, currentPosition: {row : 12, col: 5} },
      { name: "Player 2", dice: 0, currentPosition: {row: 5, col: 0} },
      { name: "Player 3", dice: 0, currentPosition: {row: 0, col: 7} },
      { name: "Player 4", dice: 0, currentPosition: {row: 7, col: 12} }
    ];

    getSquareColor(row: number, col: number) {
      const piece = this.gridColor.find(p => p.row === row && p.col === col);
      return piece ? piece.color : '';
    }

    rollDice() {
      const currentPlayer = this.players[this.currentPlayerIndex];
      currentPlayer.dice = Math.floor(Math.random() * 6) + 1;
      this.movePiece(this.currentPlayerIndex);
      console.log(currentPlayer.currentPosition);
      this.isWinner(this.currentPlayerIndex);
      this.killPiece(this.currentPlayerIndex);
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

      movePiece(playerIndex: number) {
      const player = this.players[playerIndex];
      const currentIndex = this.path.findIndex(pos => pos.row === player.currentPosition.row && pos.col === player.currentPosition.col);
      const newIndex = (currentIndex + player.dice)%this.path.length;
      this.count[playerIndex] = this.count[playerIndex] + player.dice;
      if (this.count[playerIndex] > this.path.length) {
        alert("You can't move that far!");
        this.count[playerIndex] = this.count[playerIndex] - player.dice;
        return;
      }

      player.currentPosition = this.path[newIndex];
    }

    isWinner(playerIndex: number){
      const player = this.players[playerIndex];
      if(player.currentPosition.row == 12 && player.currentPosition.col == 5 && player.name == "Player 1"){
        alert(player.name + " Wins!");
        this.winner = player.name;
      } else if(player.currentPosition.row == 5 && player.currentPosition.col == 0 && player.name == "Player 2"){
        alert(player.name + " Wins!");
        this.winner = player.name;
      } else if(player.currentPosition.row == 0 && player.currentPosition.col == 7 && player.name == "Player 3"){
        alert(player.name + " Wins!");
        this.winner = player.name;
      } else if(player.currentPosition.row == 7 && player.currentPosition.col == 12 && player.name == "Player 4"){
        alert(player.name + " Wins!");
        this.winner = player.name;
      }
    }

    killPiece(playerIndex: number){
      const player = this.players[playerIndex];
      for(let i = 0; i < this.players.length; i++){
        if(this.players[i].currentPosition.row == player.currentPosition.row && this.players[i].currentPosition.col == player.currentPosition.col && i != playerIndex){
          this.players[i].currentPosition = this.startingPosition[i];
          this.count[i] = 0;
        }
      }
    }
}



