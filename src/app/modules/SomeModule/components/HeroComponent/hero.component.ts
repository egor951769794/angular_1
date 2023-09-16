import { Component, Input } from '@angular/core';
import { IHero } from 'src/app/hero';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    title = 'hero';

    @Input()
    hero : IHero;
}
