import { Injectable } from "@angular/core";
import { IHero } from "src/app/hero";

@Injectable( {providedIn: 'root'} )

export class HeroesSerivce {
    private heroes : IHero[] = [
        {id : 0, name : "Dr Nice", rating: 10},
        {id : 1, name : "Narco", rating: 7},
        {id : 2, name : "Bombasto", rating: 15},
        {id : 3, name : "Celeritas", rating: 25},
        {id : 4, name : "Magneta", rating: 11},
        {id : 5, name : "RubberMan", rating: 5},
        {id : 6, name : "Dynama", rating: 6},
    ]

    getAllHeroes(): IHero[] {
        return this.heroes;
    }

    getTopHeroes(amount : number): IHero[] {
        return this.heroes.sort((a, b) => b.rating - a.rating).slice(0, amount);
    }

    getHero(id : number): IHero {
        return this.heroes[id];
    }

    updateHeroName(id : number, name : string) {
        this.heroes[id].name = name;
    }
}
