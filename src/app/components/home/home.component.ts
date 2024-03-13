import { Component } from '@angular/core';
import { MiddleComponent } from "../middle/middle.component";
import { LMenuComponent } from "../l-menu/l-menu.component";
import { RMenuComponent } from "../r-menu/r-menu.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MiddleComponent, LMenuComponent, RMenuComponent]
})
export class HomeComponent {

}
