import { Component, Input } from '@angular/core';
import { HeroesSerivce } from 'src/app/services/HeroesService/heroes.service';
import { AppearanceSwitchSerivce } from 'src/app/services/AppearanceSwitchService/appearance-switch.service';

@Component({
    selector: 'app-app-switch',
    providers: [HeroesSerivce],
    templateUrl: './appearance-switch.component.html',
    styleUrls: ['./appearance-switch.component.css']
})
export class AppearanceSwitchComponent {
    @Input()
    switcher : AppearanceSwitchSerivce;
}
