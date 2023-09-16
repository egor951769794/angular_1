import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SomeComponent } from "./components/SomeComponent/some.component";
import { DashboardComponent } from "./components/DashboardComponent/dashboard.component";
import { ListComponent } from "./components/ListComponent/list.component";
import { HeroComponent } from "./components/HeroComponent/hero.component";



@NgModule({
    declarations: [
        [SomeComponent, DashboardComponent, ListComponent, HeroComponent]
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        [SomeComponent]
    ]
})
export class SomeModule {}