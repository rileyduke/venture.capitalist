import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpgradesComponent } from './view/upgrade/upgrades/upgrades.component';
import { GameComponent } from './view/top/game/game.component';


const routes: Routes = [
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'game', component: GameComponent },
  { path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
