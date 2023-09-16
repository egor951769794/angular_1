import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppearanceSwitchComponent } from "./components/AppearanceSwitchComponent/appearance-switch.component";



@NgModule({
    declarations: [
        [AppearanceSwitchComponent]
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        [AppearanceSwitchComponent]
    ]
})
export class HeaderModule {}
