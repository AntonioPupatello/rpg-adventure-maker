import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';


@NgModule({
  declarations: [
    MasterDashboardComponent,
    PlayerDashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
