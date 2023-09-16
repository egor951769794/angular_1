import { Component, Input } from '@angular/core';
import { HeroesSerivce } from 'src/app/services/HeroesService/heroes.service';
import { IHero } from 'src/app/hero';
import { AppearanceSwitchSerivce } from 'src/app/services/AppearanceSwitchService/appearance-switch.service';

@Component({
    selector: 'app-some',
    providers: [HeroesSerivce, AppearanceSwitchSerivce],
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css']
})
export class SomeComponent {

    constructor(private heroesService : HeroesSerivce) {}

    private numHeroes : number = 4;

    title = 'heroes_angular';

    // heroes : IHero[] = [];

    @Input()
    appearance : string;
    @Input()
    heroes : IHero[];

    ngOnInit() {
        this.heroes = this.heroesService.getTopHeroes(this.numHeroes);
    }
}
