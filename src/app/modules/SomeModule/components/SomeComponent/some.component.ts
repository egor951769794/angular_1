import { Component } from '@angular/core';

@Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css']
})
export class SomeComponent {
    title = 'heroes_angular';
    heroes = [
    {name: "hero№1", desc: "смешной"},
    {name: "hero№2", desc: ""},
    {name: "hero№3", desc: "весельчак"},
    {name: "hero№4", desc: ""},

  ]
    share = function() {
        alert("hero shared")
    }
}
