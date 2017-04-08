import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { SquareComponent } from './square/square.component';
import { ColorPipe } from './color.pipe';

import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    SquareComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
