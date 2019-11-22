import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavSidebarComponent } from './view/layout/nav-sidebar/nav-sidebar.component';
import { NavTopbarComponent } from './view/layout/nav-topbar/nav-topbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradesComponent } from './view/upgrade/upgrades/upgrades.component';

import { RunBusinessComponent } from './view/top/game/run-business/run-business.component';
import { GameComponent } from './view/top/game/game.component';
import { PlayerStatsComponent } from './view/top/game/player-stats/player-stats.component';
import { NavMenuItemsComponent } from './view/layout/nav-menu-items/nav-menu-items.component';

@NgModule({
   declarations: [
      AppComponent,
      NavSidebarComponent,
      NavTopbarComponent,
      UpgradesComponent,
      GameComponent,
      RunBusinessComponent,
      PlayerStatsComponent,
      NavMenuItemsComponent
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
