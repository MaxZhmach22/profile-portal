import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnityGameHandlerComponent } from './unity-game-handler/unity-game-handler.component';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UnityGameHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/dune'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
