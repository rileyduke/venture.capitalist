import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpgradesComponent } from './upgrade/upgrades/upgrades.component';
import { GameComponent } from './top/game/game.component';


const routes: Routes = [
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
