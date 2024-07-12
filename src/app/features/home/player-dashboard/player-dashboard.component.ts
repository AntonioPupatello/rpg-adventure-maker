import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrl: './player-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDashboardComponent {

}
