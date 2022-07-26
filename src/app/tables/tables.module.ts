import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "./tables-routing.module";
import { FormsModule } from '@angular/forms';
import { ExtendedTableComponent } from "./extended/extended-table.component";
import { RegularTableComponent } from "./regular/regular-table.component";
import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ExtendedTableComponent,
        RegularTableComponent,
        SmartTableComponent
    ]
})
export class TablesModule { }
