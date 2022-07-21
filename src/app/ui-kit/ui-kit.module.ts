import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIKitRoutingModule } from "./ui-kit-routing.module";
import { MatchHeightModule } from "../shared/directives/match-height.directive"

import { GridsComponent } from "./grids/grids.component";

;

@NgModule({
    imports: [
        CommonModule,
        UIKitRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatchHeightModule
    ],
    declarations: [
        GridsComponent,
      
    ]
})
export class UIKitModule { }
