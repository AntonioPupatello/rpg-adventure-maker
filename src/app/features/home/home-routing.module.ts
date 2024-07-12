import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGuard } from '../../core/guards/user-type.guard';
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
      path: 'master',
      component: MasterDashboardComponent,
      },
      {
      path: 'player',
      component: PlayerDashboardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
