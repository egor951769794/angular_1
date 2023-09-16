import { Component, Input } from '@angular/core';
import { IHero } from 'src/app/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'list';

  @Input()
  data : IHero[];

  ngOnInit() {
    
  }
}
