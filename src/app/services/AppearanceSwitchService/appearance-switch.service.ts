import { Injectable } from "@angular/core";

@Injectable( {providedIn: 'root'} )

export class AppearanceSwitchSerivce {
    private appearance : string = 'dash';
    
    toDash() {
        this.appearance = 'dash';
    }

    toList() {
        this.appearance = 'list';
    }

    getAppearance() {
        return this.appearance;
    }
}
