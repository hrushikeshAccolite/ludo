import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PawnComponent } from './pawn/pawn.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PawnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
