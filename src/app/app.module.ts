import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './view/layout/nav-sidebar/nav-sidebar.component';
import { UpgradesComponent } from './view/upgrade/upgrades/upgrades.component';
import { GameComponent } from './view/top/game/game.component';

@NgModule({
   declarations: [
      AppComponent,
      NavSidebarComponent,
      UpgradesComponent,
      GameComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
