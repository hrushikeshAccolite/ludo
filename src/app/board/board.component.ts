import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {

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
    {row: 11, col: 6, color: 'bg-gray-400'},
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


    dice: number = 0;

    currentPosition = {row: 12, col: 5};

    getSquareColor(row: number, col: number) {
      const piece = this.gridColor.find(p => p.row === row && p.col === col);
      return piece ? piece.color : '';
    }

    rollDice(){
      this.dice = Math.floor(Math.random() * 6) +1;
      this.movePiece();
      console.log(this.currentPosition);
      this.isWinner();
    }

    movePiece() {
      const currentIndex = this.path.findIndex(pos => pos.row === this.currentPosition.row && pos.col === this.currentPosition.col);
      const newIndex = currentIndex + this.dice;

      if (newIndex >= this.path.length) {
        // Piece goes out of bounds, do not move it
        alert("You can't move that far!");
        return;
      }

      this.currentPosition = this.path[newIndex];
    }

    isWinner(){
      if(this.currentPosition.row == 12 && this.currentPosition.col == 5){
        alert("You Win!");
      }
    }
}


