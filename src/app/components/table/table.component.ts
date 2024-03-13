import { Component, OnInit } from '@angular/core';
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, DropdownModule, FormsModule, TooltipModule,ContextMenuModule,MenuModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
 
}
