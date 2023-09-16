import { Component } from '@angular/core';
import { AppearanceSwitchSerivce } from './services/AppearanceSwitchService/appearance-switch.service';
import { HeroesSerivce } from './services/HeroesService/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroes_angular';
  constructor(public switchService : AppearanceSwitchSerivce, public heroesService : HeroesSerivce) {}
}
