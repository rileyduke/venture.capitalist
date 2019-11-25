import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpgradesComponent } from './view/upgrade/upgrades/upgrades.component';
import { GameComponent } from './view/top/game/game.component';
import { AchievementsComponent } from './view/achievement/achievements/achievements.component';


const routes: Routes = [
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'game', component: GameComponent },
  { path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  },
  { path: 'achievements', component: AchievementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
