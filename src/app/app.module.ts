import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { SquareComponent } from './square/square.component';
import { ColorPipe } from './color.pipe';
import { GameService } from './game.service';
import { PreviewComponent } from './preview/preview.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    SquareComponent,
    ColorPipe,
    PreviewComponent,
    GameOverDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
