import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnityGameHandlerComponent } from './unity-game-handler/unity-game-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    UnityGameHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
