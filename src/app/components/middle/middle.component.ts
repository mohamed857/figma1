import { Component } from '@angular/core';
import { ChartComponent } from "../chart/chart.component";
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-middle',
    standalone: true,
    templateUrl: './middle.component.html',
    styleUrl: './middle.component.css',
    imports: [ChartComponent, TableComponent]
})
export class MiddleComponent {

}
