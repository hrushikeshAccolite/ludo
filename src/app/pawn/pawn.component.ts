import { Component } from '@angular/core';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css']
})
export class PawnComponent {
  faChessPawn = faChessPawn;
}
