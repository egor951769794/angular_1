import { Component, Input } from '@angular/core';
import { IHero } from 'src/app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'dash';

  @Input()
  data : IHero[];

  ngOnInit() {
    
  }
}
